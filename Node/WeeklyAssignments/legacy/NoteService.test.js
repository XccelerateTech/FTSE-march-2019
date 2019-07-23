//Fix spies

const NoteService = require('../Week-Two/Service/NoteService');
const fs = require('fs');
const path = require('path');
const file = `${__dirname}${path.sep}tests${path.sep}test.json`;

describe('Note Service with proper file', () => {
    beforeEach(function(done) {
        fs.unlink(file, () => {
            this.noteService = new NoteService(file);
            done();
        });
    });

    afterEach(function(done) {
        fs.unlink(file, done);
    });

    /* read */

    it('should be able to list empty notes', function(done) {
        this.noteService.list()
            .then((notes) => expect(notes).toEqual({}))
            .then(done)
            .catch(done.fail);
    });

    /* add */

    it('should be able to add a note', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: ['one note']
                });
            })
            .then(done)
            .catch(done.fail);
    });
    
    /* list */

    it('should be able to return an empty array for new user', function(done) {
        this.noteService.list('sam')
            .then((notes) => {
                expect(notes).toEqual([]);
            })
            .then(done)
            .catch(done.fail);
    });
    
    it('should be able to return the notes array for a user', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.list('sam'))
            .then((notes) => {
                expect(notes).toEqual(['one note']);
            })
            .then(done)
            .catch(done.fail);
    });
    
    /* update */

    it('should be able to update a note', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.update(0, 'good note', 'sam'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: ['good note']
                });
            })
            .then(done)
            .catch(done.fail);
    });

    /* remove */

    it('should be able to remove a note', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.remove(0, 'sam'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: []
                });
            })
            .then(done)
            .catch(done.fail);
    });
    
    /* update non-existent user */

    it('should throw an error for updating a non-existent user', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.update(0, 'good note', 'altaf'))
            .then(() => done.fail('Expect updating a non-existent to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('Cannot update a note, if the user doesnt exist'));
                done();
            });
    });

    /* remove non-existent user */

    it('should throw an error for removing a non-existent user', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() =>this.noteService.remove(0, 'altaf'))
            .then(() =>  done.fail('Expect removing a non-existent to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('Cannot remove a note, if the user doesnt exist'));
                done();
            });
    });
    
    /* update non-existent note */

    it('should throw an error for updating a non-existent note', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.update(1, 'good note', 'sam'))
            .then(() => done.fail('Expect updating a non-existent to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('Cannot update a note that doesnt exist'));
                done();
            });
    });

    /* remove non-existent note */

    it('should throw an error for removing a non-existent note', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => this.noteService.remove(1, 'sam'))
            .then(() => done.fail('Expect removing a non-existent to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('Cannot remove a non-existent note'));
                done();
            });
    });
    
    /* multinotes */

    describe('with many notes added', () => {
        beforeEach(function(done) {
            this.noteService.add('one note', 'sam')
                .then(() => this.noteService.add('two note', 'sam'))
                .then(() => this.noteService.add('another note', 'altaf'))
                .then(() => this.noteService.add('separated', 'altaf'))
                .then(done)
                .catch(done.fail);
        });

        /* add */

        it('should be able to add more than one note', function(done) {
            this.noteService.read()
                .then((notes) => {
                    expect(notes).toEqual({
                        sam: ['one note', 'two note'],
                        altaf: ['another note', 'separated']
                    });
                })
                .then(done)
                .catch(done.fail);
        });
        
        /* remove */

        it('should be able to remove a particular note', function(done) {
            this.noteService.remove(0, 'sam')
                .then(() => this.noteService.remove(1, 'altaf'))
                .then(() => this.noteService.read())
                .then((notes) => {
                    expect(notes).toEqual({
                        sam: ['two note'],
                        altaf: ['another note']
                    });
                })
                .then(done).catch(done.fail);
        });
    
        /* update */

        it('should be able to update a particular note', function(done) {
            this.noteService.update(0, 'good note', 'sam')
                .then(() => this.noteService.update(1, 'great note', 'altaf'))
                .then(() => this.noteService.read())
                .then((notes) => {
                    expect(notes).toEqual({
                        sam: ['good note', 'two note'],
                        altaf: ['another note', 'great note']
                    });
                })
                .then(done)
                .catch(done.fail);
        });
    
    });
});

describe('Note Service without proper file', () => {
    beforeEach(function() {
        this.noteService = new NoteService('');
    });

    it('should throw error on reading', function(done) {
        this.noteService.list()
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });

    it('should throw error on adding', function(done) {
        this.noteService.add('one note', 'sam')
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });

    it('should throw error on updating', function(done) {
        this.noteService.update(0, 'good note', 'sam')
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });

    it('should throw error on removing', function(done) {
        this.noteService.remove(0, 'sam')
            .then(() => done.fail('Expect to be failed'))
            .catch((err) => {
                expect(err).toEqual(new Error('ENOENT: no such file or directory, open \'\''));
                done();
            });
    });
});
