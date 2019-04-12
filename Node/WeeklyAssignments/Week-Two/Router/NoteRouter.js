const express = require('express');

class NoteRouter {
    constructor(noteService){
        this.noteService = noteService;
    }
    
    router(){
        let router = express.Router();

        router.get('/', (req,res)=> {
            return this.noteService.list(req.auth.user)
                .then((notes)=> res.json(notes))
                .catch((err)=> res.status(500).json(err));
        });

        router.post('/', (req,res)=>{
                console.log(req.body.note, req.auth.user)
            return this.noteService.add(req.body.note, req.auth.user)
                .then(()=> this.noteService.list(req.auth.user))
                    .then((notes)=> res.json(notes))
                    .catch((err)=> res.status(500).json(err));
        });

        router.put('/:id', (req,res)=>{
            return this.noteService.update(req.params.id, req.body.note, req.auth.user)
                .then(()=> this.noteService.list(req.auth.user))
                    .then((notes)=> res.json(notes))
                    .catch((err)=> res.status(500).json(err));
        });

        router.delete('/:id', (req,res) => {
            return this.noteService.remove(req.params.id, req.auth.user)
                .then(()=> this.noteService.list(req.auth.user))
                    .then((notes)=> res.json(notes))
                    .catch((err)=> res.status(500).json(err));
        });

        return router;
    }
}

module.exports = NoteRouter;