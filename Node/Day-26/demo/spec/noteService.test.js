const NoteService = require('../NoteService.js');

describe('NoteService', ()=>{
    test('listNote should list all of the notes', ()=>{
        let noteService = new NoteService()
        let notes = noteService.listNote()
        expect(notes).toEqual([])
    })

    test('addnote, you can add notes', ()=>{
        let noteService = new NoteService()
        notes = noteService.listNote()
        expect(notes).toEqual([])

        noteService.addNote('my first note')
        notes = noteService.listNote()
        expect(notes).toEqual(['my first note'])
    })

    test('insertNote', ()=>{
        let noteService = new NoteService()
        notes = noteService.listNote()
        expect(notes).toEqual([])
        
        noteService.addNote('my first note')
        notes = noteService.listNote()
        expect(notes).toEqual(['my first note'])

        noteService.insertNote(0, 'real first note')
        notes = noteService.listNote()
        expect(notes).toEqual(['real first note', 'my first note'])

    })

})