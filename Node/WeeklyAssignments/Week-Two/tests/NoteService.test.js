const NoteService = require('../Service/NoteService');
const fs = require('fs');
const path = require('path');
const file = `${__dirname}${path.sep}tests${path.sep}test.json`;


describe('Note Service with a properfile', () => {
    beforeEach((done) => {
        fs.unlink(file, (err) => {
            if (err) {
                console.log(err)
                this.noteService = new NoteService(file);


            }
            this.noteService = new NoteService(file);
            done();
        });
    });

    /* Read */

    test('At first it should list empty notes', () => {
        return this.noteService.list()
            .then((notes) => expect(notes).toEqual({}))

    });

    /* add */

    test('It should be able ot add a note to a file', () => {
        return this.noteService.add('first note', 'sam')
            .then(() => this.noteService.read()) 
            .then((notes) => {
                console.log(notes)
                expect(notes).toEqual({
                    sam: ['first note']
                });
            });
    });

    /*  List */

    test('It should be able to return an empty array for a new user', () => {
        return this.noteService.list('sam')
            .then((notes) => {
                expect(notes).toEqual([]);
            });
    });

    test('It should be able to return a note from a users note array', () => {
        return this.noteService.add('first note', 'sam')
            .then(() => this.noteService.list('sam'))
            .then((notes) => {
                expect(notes).toEqual(['first note']);
            });
    });

    /* update */
    test('The service should be able to update a note', () => {
        return this.noteService.add('first note', 'sam')
            .then(() => this.noteService.update(0, 'first good note', 'sam'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: ['first good note']
                });
            });
    });

    /* remove  */
    test('The service should be able to remove a note', () => {
        return this.noteService.add('first note', 'sam')
            .then(() => this.noteService.remove(0, 'sam'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: []
                });
            });
    });

    /* Update non-existing user */

    test('the service should throw and error for updating a non existing user.', () => {
        return this.noteService.add('First note', 'sam')
            .then(() => this.noteService.update(0, 'altaf'))
            .catch((err) => {
                expect(err).toEqual(new Error("Cannot update a note, if the user doesn't exist"))
            })
    })

    /* Remove non-existing user */

    test('the service should throw an error for trying to remove a note from a non-existing user', () => {
        return this.noteService.add('First note', 'sam')
            .then(() => this.noteService.remove(0, 'altaf'))
            .catch((err) => {
                expect(err).toEqual(new Error(`Cannot remove a note, if the user doesn't exist`));
            });
    });

    /* update non-existant note */

    test('the service should throw and error for updating a note that does not exist', () => {
        return this.noteService.add('First note', 'sam')
            .then(() => this.noteService.update(1, 'Second note is the best', 'sam'))
            .catch((err) => {
                expect(err).toEqual(new Error(`Cannot update a note that doesn't exist`));
            });
    });

    /* Remove a non-existant note */

    test('the service should throw and error for removing a note that does not exist', () => {
        return this.noteService.add('First note', 'sam')
            .then(() => this.noteService.remove(1, 'sam'))
            .catch((err) => {
                expect(err).toEqual(new Error(`Cannot remove a note that doesn't exist`));
            });
    });
});

/* Note Service without a proper file */
describe('Note Service without proper file', () => {
    beforeEach(() => {
        this.noteService = new NoteService('');
    });

    test('should throw error on reading', (done) => {
        return this.noteService.list()
            .catch((err) => {
                expect(err.message).toEqual(`ENOENT: no such file or directory, open ''`);
                done()
            });
    });

    test('should throw error on adding', (done) => {
        return this.noteService.add('one note', 'sam')
            .catch((err) => {
                expect(err.message).toEqual(`ENOENT: no such file or directory, open ''`);
                done()
            });
    });

    test('should throw error on updating', (done) => {
        return this.noteService.update(0, 'good note', 'sam')
            .catch((err) => {
                expect(err.message).toEqual(`ENOENT: no such file or directory, open ''`);
                done()
            });
    });

    test('should throw error on removing', (done) => {
        return this.noteService.remove(0, 'sam')
               .catch((err)=>{
                   expect(err.message).toEqual(`ENOENT: no such file or directory, open ''`);
                   done();
                });
               

      
    });
});


