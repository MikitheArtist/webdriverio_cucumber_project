const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const loginPage = require('../pageobjects/login.page');


Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open();
    await browser.pause(3000)
});

When(/^User click “Login” button$/, async () => {
    await loginPage.clickLoginBtn();
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async () => {
    await loginPage.checkErrorMsg('Epic sadface: Username is required');
});
