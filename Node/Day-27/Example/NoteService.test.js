const NoteService = require('./NoteService');
const fs = require('fs');

describe('Testing our NoteService', ()=>{

    beforeEach(()=>{
        if(fs.existsSync('test.json')){
            fs.unlinkSync('test.json')
        }
        fs.writeFileSync('test.json', '[]');
    });

    test('it lists all of the notes', (done)=>{

        const noteService = new NoteService('test.json')

        noteService.listNote().then((result)=>{
           expect(result).toEqual([])
           done()
        }).catch((err)=>{
            console.log(err)
            done.fail(err)
        });

    });

    test('will add notes using the add note method', (done)=>{
        const noteService = new NoteService('test.json')
        noteService.addNote('test').then(()=>{
            return noteService.listNote();
        }).then((result)=>{
            expect(result).toEqual(['test'])
            done()
        }).catch((err)=>{
            done.fail(err)
        })
    })

    //add another test, to see if we can add multiple (around 2) notes into our service.

    test('The note service can add more than one note', (done)=>{
        const noteService = new NoteService('test.json')
        noteService.addNote('One').then(()=>{
        noteService.addNote('Two').then(()=>{
            return noteService.listNote()
        }).then((result)=>{
            expect(result).toEqual(['One', 'Two'])
            done();
        }).catch((err)=>{
            done.fail(err)
        })
        })
    })
})