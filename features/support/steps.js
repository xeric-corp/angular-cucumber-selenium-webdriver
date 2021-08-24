const {Given, When, Then, BeforeAll, AfterAll} = require("@cucumber/cucumber");
const assert = require("assert").strict;
const {Builder, By, Key, until} = require("selenium-webdriver");

const HomePage = "http://localhost:4200";

Given("I'm on the front page", async function () {
    this.driver.get(HomePage);
});

When("the title {string} is shown", async function (string) {
    await this.driver.wait(until.titleIs(string), 1000);
    assert.equal(
        await this.driver.findElement(By.tagName("h2")).getText(),
        "Products",
    );
});
