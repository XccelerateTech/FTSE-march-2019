let express = require('express');
const bodyParser = require('body-parser');
const NoteService = require('./NoteService');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

const noteService = new NoteService();

app.get('/', (req, res)=>{
    res.json(noteService.listNote())
})

app.post('/', (req, res)=>{
    noteService.addNote(req.body.content)
    res.json('Ok')
})

app.post('/insert', (req, res)=>{
    noteService.insertNote(req.body.index, req.body.content)
    res.json('OK!!')
})

app.listen(8080, ()=>{
    console.log(`Application is listening to 8080`)
})