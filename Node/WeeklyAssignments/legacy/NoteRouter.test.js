//fix spies

describe("NoteRouter", () => {
    const NoteRouter = require('../Week-Two/Router/NoteRouter');

    let noteRouter;
    let noteService;
    let response;

    describe('with a functional note service', function() {

        beforeEach(function() {
            // Creating spies for NoteService and Express response
            noteService = jest.spyOn('noteService', {
                list: Promise.resolve(),
                add: Promise.resolve(),
                remove: Promise.resolve(),
                update: Promise.resolve(),
            });
    
            response = jest.spyOn('response', ['status', 'json']);
            response.status.and.returnValue(response);
    
            // Inject the spy into NoteRouter
            noteRouter = new NoteRouter(noteService);
        });
    
        test('Should call list in response to a GET', function(done) {
            noteRouter.get({
                auth: {
                    user: 'sam'
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.list).toHaveBeenCalledWith('sam');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });
    
        test('Should call add in response to a POST', function(done) {
            noteRouter.post({
                auth: {
                    user: 'sam'
                },
                body: {
                    note: 'test'
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.add).toHaveBeenCalledWith('test', 'sam');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });
    
        test('Should call update in response to a PUT', function(done) {
            noteRouter.put({
                auth: {
                    user: 'sam'
                },
                body: {
                    note: 'test'
                },
                params: {
                    id: 1
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.update).toHaveBeenCalledWith(1, 'test', 'sam');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });
    
        test('Should call delete in response to a DELETE', function(done) {
            noteRouter.delete({
                auth: {
                    user: 'sam'
                },
                params: {
                    id: 1
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.remove).toHaveBeenCalledWith(1, 'sam');
                expect(response.status).not.toHaveBeenCalled();
                done();
            });
        });
    
    });

    describe('with an abnormal note service', function() {

        beforeAll(function() {
            // [TODO] Think of a better way to handle this
            // To avoid printing UnhandledPromiseRejectionWarning
            //process.on('unhandledRejection', uncaught);
            process.removeListener('unhandledRejection', uncaught);
        });

        afterAll(function() {
            // [TODO] Think of a better way to handle this
            process.removeListener('unhandledRejection', uncaught);
        });

        beforeEach(function() {
            // Creating spies for NoteService and Express response
            noteService = jest.spyOn('noteService', {
                'list': Promise.reject(),
                'add': Promise.reject(),
                'remove': Promise.reject(),
                'update': Promise.reject()
            });
    
            response = jest.spyOn('response', ['status', 'json']);
            response.status.and.returnValue(response);
            response.json.and.returnValue(response);
    
            // Inject the spy into NoteRouter
            noteRouter = new NoteRouter(noteService);
        });
    
        test('Should return error in response to a GET', function(done) {
            noteRouter.get({
                auth: {
                    user: 'sam'
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.list).toHaveBeenCalledWith('sam');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            }).catch(done.fail);
        });
    
        test('Should return error in response to a POST', function(done) {
            noteRouter.post({
                auth: {
                    user: 'sam'
                },
                body: {
                    note: 'test'
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.add).toHaveBeenCalledWith('test', 'sam');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            });
        });
    
        test('Should return error in response to a PUT', function(done) {
            noteRouter.put({
                auth: {
                    user: 'sam'
                },
                body: {
                    note: 'test'
                },
                params: {
                    id: 1
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.update).toHaveBeenCalledWith(1, 'test', 'sam');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            });
        });
    
        test('Should return error in response to a DELETE', function(done) {
            noteRouter.delete({
                auth: {
                    user: 'sam'
                },
                params: {
                    id: 1
                }
            }, response).then(function() {
                // Everything ends after response JSON call
                expect(noteService.remove).toHaveBeenCalledWith(1, 'sam');
                expect(response.status).toHaveBeenCalledWith(500);
                done();
            });
        });
    
    });
});