var assert = require('assert');
var supertest = require('supertest'),
    supertest_session = require('supertest-session');
var app = require('../../app');

describe.skip('Integration Test 1', function() {

    var testagent = supertest(app);

    it.skip('test without login', function (done) {
        testagent
            .get('/test', {
                input: 'input'
            })
            .expect(401)
            .end(done);
    });
});
