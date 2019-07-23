//require the packages needed for local login
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pg = require('pg')

//require https/ fs, https for facebook login, fs for our https cert and key
const https = require('https');
const fs = require('fs')
require('dotenv').config()

//passport-facebook uses a strategy unique to the local-login
const FacebookStrategy = require('passport-facebook').Strategy;


//set up app (unpackage express)
const app = express();
//Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
//Set up express sessions - with the secret to encode the session
app.use(expressSession({
    secret: 'thisRealSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


//the code below concerning passport can be placed in a different file, you will just need to export it if you do.
//make express use passport to verify users ==> use passport with expressSessions
app.use(passport.initialize());
app.use(passport.session());

//set up the connection between your application and knex using a dotenv (keep your secrets secret)
require('dotenv').config();

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
});

//passport local strategy set up to read data from knex
passport.use('local-login', new LocalStrategy(
    async (email, password, done) => {
        try {
            let users = await knex('users').where({ email: email });
            if (users.length == 0) {
                return done(null, false, { message: 'Incorrect credentials.' });
            }
            let user = users[0];
            if (user.password === password) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect credentials.' });
            }
        } catch (err) {
            return done(err);
        }
    }
));


//actual facebook strategy
passport.use('facebook', new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `/auth/facebook/callback`
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile)

    let userResult = await knex('users').where({ facebookID: profile.id });
    if (userResult == 0) {
        let user = {
            facebookID: profile.id,
            email: profile.displayName,
            accessToken: accessToken
        }
        let query = await knex('users').insert(user).returning('id');
        user.id = query[0];
        done(null, user);
    } else {
        done(null, userResult[0])
    }
}
));


//store the user information passed from the LocalStrategy into express sessions
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//unpack the data from expressSessions to verify that the user information is correct and they have logged in.
passport.deserializeUser(async (id, done) => {
    let users = await knex('users').where({ id: id });
    if (users.length == 0) {
        return done(new Error(`Wrong user id ${id}`));
    }
    let user = users[0];
    return done(null, user);
});

//The logic below concerning the routes that the users request and are able to go down can be placed here on in a separate Routes.js file.
//Similar to the nodeJS Example.

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

//this will be sent to our users in the case of an error. 
app.get('/error', (req, res) => {
    res.send('You have failed....');
});

//send the users the login page, if users fail the login or authentication process they will be redirected here due to the isLoggedIn function.
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
});

//Here we are sending the user who has logged in a message with the email they have in local login, the isLoggedIn is the function stated above, that will authorise the user to continue to the page provided they have logged in and are authenticated
app.get('/', isLoggedIn, (req, res) => {
    res.send('YES successful login' + req.user.email);
});

//set up the login route for the user, the user will post a request to our application and then delegate the job of authentication to passport. on success send the users '/', on failure send them down the '/error' path. 
app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/error'
}));

app.get("/auth/facebook/callback", passport.authenticate('facebook', {
    failureRedirect: "/error"
}), (req, res) => res.redirect('/'));

app.get("/auth/facebook", passport.authenticate('facebook', {
    scope: ['user_friends', 'manage_pages']
}));

//options for https
const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
};

//set up our server with https and the certs/express
const server = https.createServer(options, app);


//this is the port that your application will be running on. 
server.listen(3000)