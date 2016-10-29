describe('TestClass', function() {
    var TestClass = require('../src/App');

    describe('.hello method', function () {
        it('returns a message', function () {
            var testClass = new TestClass();
            expect(testClass.message()).toEqual('hello world');
        });
    });

});

