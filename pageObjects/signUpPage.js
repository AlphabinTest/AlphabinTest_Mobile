const utils = require('../helpers/utils');
const locators = require('../locators/signUpPageLocators.json');

class SignUpPage {
  static async verifyTheSignUpForm() {
    await utils.isDisplayed(locators.userNameLabel);
    await utils.getTextAndExpectValue(locators.userNameLabel, 'Username');
    await utils.isDisplayed(locators.emailLabel);
    await utils.getTextAndExpectValue(locators.emailLabel, 'Email');
    await utils.isDisplayed(locators.passwordLabel);
    await utils.getTextAndExpectValue(locators.passwordLabel, 'Password');
    await utils.isDisplayed(locators.confirmPasswordLabel);
    await utils.getTextAndExpectValue(locators.confirmPasswordLabel, 'Confirm Password');
    await utils.isDisplayed(locators.registerSubmitButton);
    await utils.getTextAndExpectValue(locators.registerSubmitButton, 'REGISTRATION');
    await utils.isEnabled(locators.userNameInput);
    await utils.isEnabled(locators.emailInput);
    await utils.isEnabled(locators.passwordInput);
    await utils.isEnabled(locators.confirmPasswordInput);
  }

  static async signUpForm(username, email) {
    await utils.typeText(locators.userNameInput, username);
    await utils.typeText(locators.emailInput, email);
    await utils.typeText(locators.passwordInput, 'password123');
    await utils.typeText(locators.confirmPasswordInput, 'password123');
    await utils.isEnabled(locators.registerSubmitButton);
    await utils.clickOnElement(locators.registerSubmitButton);
  }
}

module.exports = SignUpPage;