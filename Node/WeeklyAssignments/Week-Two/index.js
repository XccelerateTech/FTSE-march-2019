//Require all of the libraries needed

const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const handlebars = require('express-handlebars')

const express = require('express');
const app = express();

//get all user generated modules into the application

const config = require('./stores/config.json')['development'];
const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./Service/NoteService');
const NoteRouter = require('./Router/NoteRouter');

//Set up handlebars as our view engine - handlebars will responsible for rendering our HTML
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//serve the public directory to the root of our server
app.use(express.static('public'));

//set up middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//set up basic auth
app.use(basicAuth({
    authorizer: AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))),
    challenge: true,
    realm: 'Note Taking Application',
    
}));

//create a new instance of noteService and pass the directory / files that you want to read from. 
const noteService = new NoteService(path.join(__dirname, config.notes));

// //handle initial get request
// app.get('/',  (req, res, next)=>{
//     console.log('Getting');
//     next();
// });


app.get('/', (req,res)=>{
    console.log(req.auth.user)
        noteService.list(req.auth.user).then((data)=> {

             res.render('index'
            , {
            user: req.auth.user,
            notes: data
        });
        })


       
    });


// Set up the NoteRouter - handle the requests and responses in the note, read from a file and return the actual data, get the note from your JSON file and return to the clients browser.
app.use('/api/notes', (new NoteRouter(noteService)).router());

//set up the port that we are going to run the application on, therefore the port that we can view the application from our browser.
app.listen(config.port, ()=> console.log(`Note Taking application listening to port ${config.port}`));

module.exports = app;

