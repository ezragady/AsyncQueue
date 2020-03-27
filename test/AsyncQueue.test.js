const assert = require('assert');
const AsyncQueue = require('../AsyncQueue');

const exampleFunction = (first, second) => {
    return new Promise((resolve,reject) => {
        if (first === 'reject') return reject('reject');
        setTimeout(() => {
            resolve('done');
        },1000);
    });
};

describe('Async Queue Test', function() {
    const asyncQueue = new AsyncQueue(exampleFunction);
    it('should return 2 when queue has been initialised', function() {
        asyncQueue.add('example','parameters');
        asyncQueue.add('example2','parameters2');
        assert.equal(asyncQueue.list().length, 2);
    });
    it('should return 0 when queue has been cleared after 3 seconds', function(done) {
        setTimeout(() => {
            assert.equal(asyncQueue.list().length, 0);
            done();
        },3000)
    });
    it('should try promise, remove from queue and log an error', function(done) {
        asyncQueue.add('reject');
        setTimeout(() => {
            assert.equal(asyncQueue.list().length, 0);
            done();
        },3000)
    });
});
