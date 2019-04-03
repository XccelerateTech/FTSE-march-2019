/*
D. Make an app that has a POST route. If we call the POST route with an array of numbers it should return the sum of all the numbers in the array. Test it out with Postman. Receive the array via the body.

var arr = [1,2,3,4] // -> sending that to the API returns 10
*/

//getting the packages
const express = require('express');
const bodyParser = require('body-parser');

//setting up the packages for use
const app = express();

app.use(bodyParser.json());

app.post('/sum', function(req,res){
    const body = req.body.arr;
    console.log(req.body)

    //this logic is done on the server, then we send the sum back as a json 
    let sum = body.reduce((acc,num)=> acc+num)
    res.json({"sum": sum})

    // res.json({"sum":array.reduce((acc,num) => acc + num)}); // in this method we do the logic inside of the response json before it is sent back
});

app.listen(8080);