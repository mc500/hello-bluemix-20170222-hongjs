var assert = require('assert');
//add = require('../../lib/add');

describe('Unit Test 1', function() {
    beforeEach(function() {
        console.log('beforeEach');
    });

    it('it_test1', function (done) {
        return done();
    });

    it.skip('it_test2', function (done) {
    	var result = false;
    	assert.ok(result); // Error
    })
});