jasmine.getEnv().defaultTimeoutInterval = 30000; // in milliseconds.
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.firefox()).
build();

describe('basic test', function () {
    it('should be on correct page', function (done) {
        driver.get('http://localhost:3000');
        driver.getTitle().then(function(title) {
            expect(title).toBe('React App');
            // Jasmine waits for the done callback to be called before proceeding to next specification.
            driver.quit();
            done();
        });
    });
});