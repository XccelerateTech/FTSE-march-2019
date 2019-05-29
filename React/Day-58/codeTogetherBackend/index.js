const express = require('express')
const jwt = require('jwt-simple')
const cors = require('cors')
const bodyParser = require('body-parser');
const users = require('./users')
const config = require('./config')
const authClass = require('./auth');
const axios = require('axios')


const app = express()
const auth = authClass();
app.use(bodyParser.json());
app.use(auth.initialize());
app.use(cors())





app.post("/api/login", function (req, res) {
    console.log('start')
    if (req.body.email && req.body.password) {
        let email = req.body.email;
        let password = req.body.password;
        console.log(email, password)
        let user = users.find((u) => {
            return u.email === email && u.password === password
        });
        if (user) {
            console.log('start with user')

            let payload = {
                id: user.id
            }
            let token = jwt.encode(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
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

app.listen(8080, () => {
    console.log('App is listening to port 8080')
})