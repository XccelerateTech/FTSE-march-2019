/*var fs = require('fs');

var greeting = fs.readFileSync(__dirname + '/greet.txt');

console.log(greeting);

*/

// the added utf8 stands for the encoding so we are able to read the buffer.


/*
var fs = require('fs');

var greeting = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greeting);
*/

/*
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

readable.on('data', function(chunk){
    console.log(chunk.length);
});

*/

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

readable.on('data', function(chunk){
    writeable.write(chunk);
});

