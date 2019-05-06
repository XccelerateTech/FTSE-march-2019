// Require our packages
const express = require('express');
const app = express();
const expressSession = require ('express-session')

const fs = require('fs');
const https = require('https');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const redis = require('redis');
const RedisStore = require('connect-redis')(expressSession);
const socketIOSession = require('socket.io.session');

require('dotenv').config()

const chatroomName = process.env.CHATROOM_NAME

// Set up connection to our database and sessions (Redis Session, Express Session)
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  auth: 'test123'
});

const sessionStore = new RedisStore({
  client: redisClient,
  unset: 'destroy'
});

// we pass redis as the session store
const settings = {
  store: sessionStore,
  secret: 'supersecret',
  cookie: {"path": '/', "httpOnly": true, "secure":false, "maxAge": null},
  resave: true,
  saveUninitialized: true
}

app.use(expressSession(settings));

// tell express that we are using passport to authenticate our users - and use passport styled sessions
app.use(passport.initialize());
app.use(passport.session());

// declare the facebook strategy - handle what we do 
passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: `/auth/facebook/callback`
}, (accessToken, refreshToken, profile, cb)=>{
  console.log("Do I return anything?")
  console.log(profile)
  return cb(null,{profile: profile, accessToken: accessToken});
}
));

// we are now storing the user into the redis session store
passport.serializeUser((user, done)=>{
  done(null, user);
});

passport.deserializeUser((user, done)=>{
  done(null, user);
})
// generate our HTTPS server through reading the pre generated cert and key
const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };
  
// allow our application to run both express and socket.io on the same port through our HTTPS protocol
const server = https.createServer(options, app);
const io = require('socket.io')(server);
io.use(socketIOSession(settings).parser); // We give the socketIOSession the same settings as express-session

//create our middle ware to check if a user has logged in
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

// handle route to facebook
app.get('/auth/facebook/callback', passport.authenticate('facebook',{
  failureRedirect: '/error'
}), (req, res)=> res.redirect('/'));

// Serve our public directory to the server
app.use(express.static(__dirname + '/public'));

app.get('/login', (req,res)=>{
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/', isLoggedIn, (req, res)=>{
  console.log('This is from express ', req.user);
  res.sendFile(__dirname + '/views/index.html');
});

// Use socketrouter to handle all socket events
const SocketRouter = require('./socketRouter');
const socketRouter = new SocketRouter(io, redisClient, chatroomName);
socketRouter.router();


server.listen(8080);
