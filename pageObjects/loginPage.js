const utils = require('../helpers/utils');
const locators = require('../locators/loginPageLocators.json');

class LoginPage {
  static async verifyTheLoginForm() {
    await utils.isDisplayed(locators.userNameLabel);
    await utils.getTextAndExpectValue(locators.userNameLabel, 'Username');
    await utils.isDisplayed(locators.passwordLabel);
    await utils.getTextAndExpectValue(locators.passwordLabel, 'Password');
    await utils.isDisplayed(locators.loginSubmitButton);
    await utils.getTextAndExpectValue(locators.loginSubmitButton, 'LOGIN');
  }

  static async loginForm() {
    await utils.typeText(locators.loginUserName, "Jigarmodha");
    await utils.typeText(locators.loginPassword, "karan123");
    await utils.waitForEnabled(locators.loginSubmitButton, 2);
    await utils.clickOnElement(locators.loginSubmitButton);
  }
}

module.exports = LoginPage;