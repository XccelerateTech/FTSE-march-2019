var fs = require('fs');

let copy = function (path){
var readable = fs.createReadStream(__dirname + path, {encoding: 'utf8', highWaterMark: 32*1024});

var writeable = fs.createWriteStream('../A/copied.txt')

readable.pipe(writeable);

}

copy('/text.txt')