const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session')
const pg = require('pg');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

const app = express();

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
        database: process.env.DATABASE, //'passportlocal',
        user: process.env.USER, //'postgres',
        password: process.env.PASSWORD //'postgres'
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
})

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



app.listen(8080);