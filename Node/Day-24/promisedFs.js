const fs = require('fs');


//use module.exports to declare the promisedFunction names and export them from the file.
//basically wrap the native fs.stat in a promise and resolve with the information (stats) and rejst with the err
module.exports.stat = (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if(err){
                reject(err);
            } else {
                resolve(stats)
            }
        });
    });
}

//here we wrap the native fs.readdir in a promise and resolve with the array of files in our directory
module.exports.readdir = (path)=>{
    return new Promise((resolve, reject)=>{
        fs.readdir(path,(err, files)=>{
            if(err){
                reject(err);
            } else {
                resolve(files)
            }
        });
    });
}