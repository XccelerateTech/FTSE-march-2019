
// require our modules
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session')
const pg = require('pg');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

const fs = require('fs');
const https = require('https');

const app = express();


// set up my middleware 
app.use(bodyParser.urlencoded({ extended : false}));

app.use(expressSession({
    secret: 'thisRealSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'passportlocal', //process.env.DATABASE,
        user:  'postgres', //process.env.USER,
        password: 'postgres' //process.env.PASSWORD 
    }
});

app.use(passport.initialize());
app.use(passport.session());

passport.use('local-login', new LocalStrategy(
    async (email, password, done) => {
        try{
            let users = await knex('users').where({email:email});
            if(users.length == 0){
                return done(null, false, {message: 'No user exists'});
            }
            let user = users[0];
            if(user.password === password){
                return done(null, user);
            } else {
                return done(null, false, {message: 'Incorrect credentials'})
            }
        }catch(err){
            return done(err);
        }
    }
));

passport.use('facebook-strategy', new FacebookStrategy({
    clientID: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'email']
}, async (accessToken, refreshToken, profile, done)=>{

    
    console.log(profile)

    let userResult = await knex('users').where({ facebookID: profile.id});
    if(userResult == 0 ){
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

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
    let users = await knex('users').where({ id: id});
    if (users.length == 0) {
        return done(new Error(`Wrong user id ${id}`));
    }
    let user = users[0];
    return done(null, user);
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/login.html')
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/error'
}));

app.get('/', isLoggedIn, (req, res)=>{
    res.send(`You've logged in well done! `+ req.user.email)
});

app.get('/error', (req, res)=>{
    res.send('You have failed....')
});

// similar to our post method above. 
app.get('/auth/facebook/callback', passport.authenticate('facebook-strategy',{
    failureRedirect: '/error'
}), (req, res)=> res.redirect('/'));

//initial facebook request 
app.get('/auth/facebook', passport.authenticate('facebook-strategy', {
    scope: ['user_friends', 'manage_pages', 'user_birthday', 'user_likes']
}));


const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
};

https.createServer(options, app).listen(8080)

