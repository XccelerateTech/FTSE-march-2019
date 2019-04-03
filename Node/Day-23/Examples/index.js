const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/', function (req, res, next){
    console.log(req)
    console.log('I am technically middleware')
    next()
})

app.get('/', function(req,res){
    res.end('Hello World!')
});



app.get('/message', function(req,res){
    res.end('This is the message you will recieve at this URL!')
});

app.get('/hong-kong/:name/:age', function(req, res){
    console.log(req.params);
    let {name, age} = req.params
    res.end(`Hello Hong Kong! I am ${name}, I am ${age} years old`)
});

app.post('/xccelerate', (req, res)=>{
    let {name, age} = req.body;
    res.end(`Hello Xccelerate! I am ${name}, I am ${age} years old`)
})

app.listen(8081, ()=>{
    console.log(`App is listening to port 8081`)
})
