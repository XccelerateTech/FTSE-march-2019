var http = require('http');
var fs = require('fs');


//this code will only show the index.html - not including css, pictures.    


/*
http.createServer(function(req, res){
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else {
        res.writeHead(404);
        res.end()
    }
}).listen(8080, '127.0.0.1')

// this will load the basic html structure of the index.html page, all images will not be served however.

*/


//the conditional statements must follow the path from the index.html
//Where as the when you create ReadStream it is the full path.
/*
http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else if (req.url === '/assets/logo.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/logo.png').pipe(res);
    } else if (req.url === '/assets/flower-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/flower-icon.png').pipe(res);
    } else if (req.url === '/assets/payment-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/payment-icon.png').pipe(res);

    } else if (req.url === '/assets/phone-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/phone-icon.png').pipe(res);

    } else if (req.url === '/assets/truck-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/truck-icon.png').pipe(res);

    } else if (req.url === '/assets/flowershop.jpg') {
        fs.createReadStream(__dirname + '/flowershop/assets/flowershop.jpg').pipe(res);

    } else if (req.url === '/stylesheet.css') {
        fs.createReadStream(__dirname + '/flowershop/stylesheet.css').pipe(res);

    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080, '127.0.0.1')

*/

// this code will render the whole flower shop
/*
var path = require('path');

http.createServer(function(req,res){
    let filePath = req.url == '/' ? "index.html" : req.url;

    res.writeHead(200);

    fs.createReadStream(path.join(__dirname, 'flowershop', filePath)).pipe(res);

}).listen(8080, '127.0.0.1')


*/