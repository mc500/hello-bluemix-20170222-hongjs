var assert = require('assert');
var supertest = require('supertest'),
    supertest_session = require('supertest-session');
var app = require('../../app');

describe.skip('Integration Test 2', function() {
    
    var testagent = supertest_session(app);

    it('login', function (done) {
        testagent
            .post('/login')
            .send({
                userid: 'userid',
                passwd: 'passwd'
            })
            .expect(200)
            .end(done);
    })

    it('test with login', function (done) {
        testagent
            .get('/test', {
                input: 'input'
            })
            .expect(404)
            .end(done);
    });

    it('logout', function (done) {
        testagent
            .get('/logout')
            .expect(200)
            .end(done);
    });
});
