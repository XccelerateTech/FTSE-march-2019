//require all the packages that are needed
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')

//set up the packages needed for the app
const app = express();
const upload = multer();

//set up the port environment that we are going to use
const port = process.env.PORT || 3000;

//set up the middleware for the program, app.use bodyParser - allows us to read the data, app.use fileUpload allows express to handle different files being uploaded to the server.
app.use(bodyParser.urlencoded({extended: false}));
app.use(fileUpload());

// uploadDirectory is the path to our directory files, where we will store our cached files, path.sep provides the platform specific path segment separator
const uploadDirectory = __dirname + path.sep + 'files';

//here is the code to serve folder files to the server - allow user access to the folder
app.use(express.static('files'))

//declare the variable cache as an object so that it is possible to store the array of files
let caches = {};

//promise to read and write files to cache
//writeFile is a function which takes the name of the file and the body for storage - will write the file to our uploadDirectory 'files', this promise resolves with the name of the file 
function writeFile(name, body){
    return (new Promise((resolve, reject) => {
        fs.writeFile(uploadDirectory + path.sep + name, body, (err) => {
            if(err){
                return reject(err);
            }
            resolve(name);
        });
    })).then(readFile);
}

//readFile is a function which takes the file as an input, it goes to the 'files' directory we server via express. and will look for the name of the file we are looking for, the promise resolves with the body of the file
function readFile(file){
    return (new Promise((resolve, reject) => {
        fs.readFile(uploadDirectory + path.sep + file, (err, body) => {
            if(err){
                return reject(err);
            }
            resolve(body);
        });
    }));
}

//when we goto localhost 3000(in my case) this code serves the index.html
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//handle requests to and from the server

//the get request takes :name as the parameter, it looks for any file in the directory 'files' with the same name that pass through the readFile function- if there is no name with the parameter see if you can assign the file a name, otherwise get the file in the array caches with the name specified in our parameters and return the body, otherwise send an error message. 
app.get('/files/:name', (req, res)=> {
    if(caches[req.params.name] == null){
        caches[req.params.name] = readFile(req.params.name);
    }
    caches[req.params.name]
        .then((body) => res.send(body))
        .catch((e)=> res.status(500).send(e.message));
});

//the post request uses the express to handle the post request, multer to upload a single file(at a time) - the logic that proceeds the request handles it, we extract the data from the file and store it into two variables, file and data. Then we call the cache variable object we had earlier and assign our file to the array using our writeFile function (writes uploaded file to the directory 'files') and responds to user by sending 'file uploaded' if there is an error then send a message.
app.post('/files', upload.single('file'), (req, res)=> {

        let file = req.files.upload.name
        let data  = req.files.upload.data
        caches[file] = writeFile(file, data);
        caches[file].then(()=> res.send('file uploaded'))
            .catch((e)=> res.status(500).send(e.message));
});
//use express to run the server, on port 3000
app.listen(port, ()=> console.log(`Dropbox with cache listening on port ${port}!`));


//This application doesnt have buttons or anything to download the file. In order to download the file, you must emulate the route that has been set up.
// app.get('/files/:name' where the name is the file name that you've uploaded. 

