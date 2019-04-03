var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello FTSE 2019 March');
}).listen(8080, '127.0.0.1');