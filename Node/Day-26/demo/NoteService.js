const fs = require('fs')

class NoteService {
    constructor(){
        this.notes = [];
    }

    addNote(note){
        this.notes.push(note)
    }

    listNote(){
        return this.notes
    }

    removeNote(){
        this.notes.splice(index, 1)
    }

    insertNote(index, note){
        this.notes.splice(index, 0, note)
    }
}

module.exports = NoteService;