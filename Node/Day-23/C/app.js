let express = require('express');
let app = express();

app.post('/test', function(req,res){
    console.log(req.path)
    res.send('post received');
});

app.post('/user/1', function(req,res){
    console.log(req.path)
    res.send('user 1 information');
});

app.listen(8080);