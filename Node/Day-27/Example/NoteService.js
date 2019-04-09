const fs = require('fs')

class NoteService {
    constructor(filename){
        this.filename = filename;
        this.notes = [];
        this.listNotePromise = this.listNote()
    }

    listNote(){
        return new Promise((resolve, reject)=>{
            fs.readFile(this.filename, 'utf-8', (err, data)=>{
                if(err){
                    reject(err)
                } else {
                    this.notes= JSON.parse(data)
                    resolve(this.notes)
                }

            })
        })
    }

    addNote(note){
        return new Promise ((resolve, reject)=>{
            this.listNotePromise.then(()=>{
                this.notes.push(note);

                fs.writeFile(this.filename, JSON.stringify(this.notes), (err)=>{
                    if(err){
                        reject(err);

                    }
                    resolve();
                })
            })
        })
    }
}

module.exports = NoteService;