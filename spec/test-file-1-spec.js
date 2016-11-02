jasmine.getEnv().defaultTimeoutInterval = 30000; // in milliseconds.
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

describe('basic test', function () {
    it('should be on correct page', function (done) {
        driver.get('http://localhost:3000');
        driver.findElement(webdriver.By.id('user-fullname'))
            .getText(function (text) {
                console.log(text);
                return this;
            })
            .getText(function (text) {
            });

    });
});
