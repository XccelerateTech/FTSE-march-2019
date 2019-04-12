const request = require('supertest');
const app = require('../index');

describe('Routes', () => {

    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 1000)); // avoid jest open handle error
    })

    test('GET / it should return 401 if you do not supply a username and password', (done)=>{
        request(app)
            .get('/')
            .expect(401)
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
    })
    test('GET /api/notes it should return 401 if you do not supply a username and password', (done)=>{
        request(app)
            .get('/api/notes')
            .expect(401)
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
    })
    test('POST /api/notes it should return 401 if you do not supply a username and password', (done)=>{
        request(app)
            .post('/api/notes')
            .expect(401)
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
    })
    test('PUT /api/notes/1 it should return 401 if you do not supply a username and password', (done)=>{
        request(app)
            .put('/api/notes/1')
            .expect(401)
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
    })
    test('DELETE /api/notes/1 it should return 401 if you do not supply a username and password', (done)=>{
        request(app)
            .delete('/api/notes/1')
            .expect(401)
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
    })

    test('/random it should return 404 if try to go down a route that is not correct', (done)=>{

        let username = 'sam';
        let password = '1234512345';
        var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
    

        request(app)
            .get('/random')
            .set('Authorization', auth)
            .expect(404)
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
    })

    xtest('/ should return the index page', (done)=>{
        let username = 'sam';
        let password = '1234512345';
        var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
    
        request(app)
            .get('/')
            .set('Authorization', auth)
            .expect(200)
            .expect("Content-Type", "text/html; charset=utf-8")
            .end((err, res)=>{
                if(err) throw err;
                done()
            })
            
    })

});