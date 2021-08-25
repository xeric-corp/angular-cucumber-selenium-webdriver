import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Builder } from "selenium-webdriver";
import "selenium-webdriver/chrome";

class SeleniumWorld extends World {
    driver = new Builder().forBrowser("chrome").build();

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(SeleniumWorld);
