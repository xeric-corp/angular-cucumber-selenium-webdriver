import { Given, When } from "@cucumber/cucumber";
import { strict as assert } from 'assert';
import { By, until } from "selenium-webdriver";

const HomePage = "http://localhost:4200";

Given("I'm on the front page", async function() {
    this.driver.get(HomePage);
});

When("the title {string} is shown", async function(string: string) {
    const driver = this.driver as any;
    await driver.wait(until.titleIs(string), 1000);
    assert.equal(
        await driver.findElement(By.tagName("h2")).getText(),
        "Products",
    );
});
