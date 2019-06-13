const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs')
const app = express();

const LinkService = require('./Service/LinkService.js');
const LinkRouter = require('./Router/LinkRouter');
const TagService = require('./Service/TagService');
const TagRouter = require('./Router/TagRouter');


const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

const axios = require('axios');

const jwt = require('jwt-simple')
const config = require('./config')
const auth = require('./auth')
const users=require('./users')

app.use(cors());
app.use(bodyParser.json());

let linkService = new LinkService(knex);
let tagService = new TagService(knex);

const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };

app.post("/api/login", function(req, res) {  
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;

        var user = users.find((u)=> {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            console.log('no')
            res.sendStatus(401);
        }
    } else {
        console.log('no')

        res.sendStatus(401); 

    }
});

app.post("/api/login/facebook", function(req, res) {  
    if (req.body.access_token) {
        var accessToken = req.body.access_token;
        
        axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
        .then((data)=>{
            if (!data.data.error) {
                var payload = {
                    id: accessToken
                };
                users.push({
                    id: accessToken, // better to use DB auto increment ID
                    name: "Facebook User", // better to use data or profile to check the facebook user name
                    email: "placeholder@gmail.com", // better to use data or profile to check the email
                    password: ""
                })
                // Return the JWT token after checking
                console.log('suckcess')
                var token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    token: token
                    // optionally provide also the user id to frontend
                });
            } else {
                res.sendStatus(401);
            }
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(401);
        });
    } else {
        res.sendStatus(401);
    }
});


app.use('/api/link/',  (new LinkRouter(linkService)).router());
app.use('/api/tag/', (new TagRouter(tagService)).router());


https.createServer(options, app).listen(8080, ()=>{
    console.log(`Application listening to port 8080`)
})