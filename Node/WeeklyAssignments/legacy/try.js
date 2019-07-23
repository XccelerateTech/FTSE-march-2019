
//* Multi Note */
describe('with many notes added', () => {
    beforeEach((done) => {
        fs.unlink(file, (err) => {
            if (err) {
                console.log(err)
                throw new Error;

            }
            this.noteService = new NoteService(file);
            return this.noteService.add('one note', 'sam')
                .then(() => this.noteService.add('two note', 'sam'))
                .then(() => this.noteService.add('another note', 'altaf'))
                .then(() => this.noteService.add('separated', 'altaf')), done();
            
        });
    });

    /* add */

    test('should be able to add more than one note', (done) => {
        return this.noteService.read()
            .then((notes) => {
                expect(notes).toEqual({
                    "sam":  ['one note', 'two note'],
                    "altaf":  ['another note', 'separated']
                });
                done()
            });
    });

    /* remove */

    test('should be able to remove a particular note', (done) => {
        return this.noteService.remove(0, 'sam')
            .then(() => this.noteService.remove(1, 'altaf'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: ['two note'],
                    altaf: ['another note']
                });
                done()
            });
    });

    /* update */

    test('should be able to update a particular note', (done) => {
        return this.noteService.update(0, 'good note', 'sam')
            .then(() => this.noteService.update(1, 'great note', 'altaf'))
            .then(() => this.noteService.read())
            .then((notes) => {
                expect(notes).toEqual({
                    sam: ['good note', 'two note'],
                    altaf: ['another note', 'great note']
                });
                done()
            });
    });

});


