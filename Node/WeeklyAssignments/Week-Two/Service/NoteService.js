const fs = require('fs');

class NoteService {
    constructor(file){
        this.file = file;
        this.initPromise = null;

        this.init()
    }

    init(){
        if (this.initPromise === null){
            this.initPromise = new Promise ((resolve, reject)=> {
                this.read()
                    .then(()=>{
                        resolve();
                    })
                    .catch(()=>{
                        this.notes = {};
                        this.write()
                            .then(resolve)
                            .catch(reject);
                    });
            });
        }
        return this.initPromise;
    }

    read(){
        return new Promise ((resolve, reject)=>{
            fs.readFile(this.file, 'utf-8', (err, data)=>{
                if(err){
                    reject(err)
                }
                try{
                    this.notes = JSON.parse(data);
                } catch (e) {
                    return reject(e)
                }
                return resolve(this.notes);
            });
        });

    }

    write(){
        return new Promise((resolve, reject) => {
            fs.writeFile(this.file, JSON.stringify(this.notes), (err)=>{
                if(err){
                    return reject(err);
                }
                resolve(this.notes);
            });
        });
    }

    list(user){
        if(typeof user !== 'undefined'){
            return this.init()
                .then(()=> this.read())
                .then(()=>{
                    if(typeof this.notes[user] === 'undefined'){
                        return [];
                    } else {
                        return this.notes[user];
                    }
                });
        } else {
            return this.init().then(()=>{
                return this.read();
            });
        }
    };

    add(note, user){
        return this.init().then(() => {
            if(typeof this.notes[user] === 'undefined'){
                this.notes[user] = [];
            }
            this.notes[user].push(note);
            return this.write();
        });
    };

    update(index, note, user){
        return this.init().then(()=>{
            if(typeof this.notes[user] === 'undefined'){
                throw new Error("Cannot update a note, if the user doesn't exist");
            }
            if(this.notes[user].length <= index ){
                throw new Error("Cannot update a note that doesn't exist");
            }
            this.notes[user][index] = note
            return this.write();
        });
    }

    remove(index, user){
        return this.init().then(()=>{
            if(typeof this.notes[user] === 'undefined'){
                throw new Error("Cannot remove a note, if the user doesn't exist");
            }
            if(this.notes[user].length <= index){
                throw new Error("Cannot remove a note that doesn't exist");
            }
            this.notes[user].splice(index, 1);
            return this.write();
        });
    }
}

module.exports = NoteService;