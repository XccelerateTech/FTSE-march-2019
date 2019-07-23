//Set require and set up express
const express = require('express');
const app = express();

//Require and get all the other npm packages the application needs
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const port = 8080;

//Set up empty variables to use later on
let Cache = {};
let fileArr;
let i;

// Set up some functions

// find the files within a directory
const readDir = (path) => {
    return new Promise ((resolve, reject) => {
        fs.readdir(path,(err, files)=>{
            fileArr = files
            resolve()
        });
    });
};

// update the list of items that we are getting from the directory which we are reading, files. 
const updateCache = () => {
    readDir('./files').then(()=>{
        Cache = {};
        for(i=0; i<fileArr.length; i++){
            Cache[i] = fileArr[i]
        };
        console.log(Cache);
    });
};

updateCache();

//setting up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static('files'))

// make a request to the root, so we want to send an index back to the user
app.get('/', (req, res)=>{
    updateCache();
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

// make a request - a get request down the route, filesdir, so we can get a list of all the cached objects
app.get('/filesdir', (req,res)=>{
    res.send(Cache);
});

// route to handle the form that is posting the file to our server 
app.post('/upload', (req, res)=>{
    if(req.files){
        let file = req.files.foo, filename = file.name

        file.mv(__dirname + '/files/' + filename, (err) => {
            if(err){
                console.log(err);
                res.end()
            } else {
                updateCache();
                res.redirect('/');
            };
        });
    };
});

// handle the request to download a particular file (we do this by pressing onto the file in question.)
app.get('/files/:name', (req, res)=>{
    res.download(__dirname + '/files/' + req.params.name);
});

//handle a delete through a get request. fs.unlinkSync allows us to delete a file given a path. 
app.get('/filesdelete/:num', (req, res)=>{
    fs.unlinkSync(__dirname + '/files/' + Cache[req.params.num]);
    updateCache();
    res.redirect('back');
});

// Make our application listen to a particular port. 
app.listen(port, ()=>{
    console.log(`Application listening at ${port}!`)
})









