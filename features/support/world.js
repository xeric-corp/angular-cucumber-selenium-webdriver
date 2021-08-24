const {setWorldConstructor, World} = require("@cucumber/cucumber");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const safari = require("selenium-webdriver/safari");

class SeleniumWorld extends World {
    driver = new webdriver.Builder().forBrowser("safari").build();

    constructor(options) {
        super(options);
    }
}

setWorldConstructor(SeleniumWorld);
