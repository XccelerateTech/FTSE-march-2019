// Require Node Packages
const express = require('express');
const handlebars = require('express-handlebars');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');

// Set up express and environment
const app = express();
require('dotenv').config();
const config = require('./config.json')[process.env.NODE_ENV || 'development'];

// Require User create modules
const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./NoteService/NoteService');
const NoteRouter = require('./NoteRouter/NoteRouter')

// Set up connection to postgres database via knex
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

// Setup handlebars as express template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Setup middleware and serve public folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(basicAuth({
    authorizeAsync: true,
    authorizer: AuthChallenger(knex),
    challenge: true,
    realm: 'Note Taking with knex'
}));

//Note that the authorizer function above is expected to be synchronous. This is the default behavior, you can pass authorizeAsync: true in the options object to indicate that your authorizer is asynchronous. In this case it will be passed a callback as the third parameter, which is expected to be called by standard node convention with an error and a boolean to indicate if the credentials have been approved or not.

// Setup noteService 

const noteService = new NoteService(knex);


// Setup route to handler to send index page
app.get('/', (req, res)=>{
    res.render('index', {
        user: req.auth.user
        });
});

app.get('/info', (req, res)=>{
    res.send('info')
});

// Set up routes to /api/notes
app.use('/api/notes/', (new NoteRouter(noteService)).router());

app.listen(config.port, ()=> console.log(`Note Taking application listening to ${config.port}!`));

module.exports.app = app;
