const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


const client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'test123'
});


app.post('/', function(req,res){
    client.lpush('messageQueue', JSON.stringify({
        msg: req.body.msg,
        date: req.body.date
    }), (err)=>{
        if(err){
            console.log(err);
            res.json(err);
            return;
        }

        console.log(req.body.msg)
        console.log('LPUSH a task with a msg ' + req.body.msg + ' and date' + req.body.date);

        res.json('ok!');
    });
});

app.listen(6666);