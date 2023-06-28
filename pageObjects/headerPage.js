const utils = require('../helpers/utils');
const locators = require('../locators/headerLocators.json');

class HeaderPage_HomePage {
  static async headerButtonsExistence() {
    await utils.isElementExist(locators._alphabinLogo);
    await utils.isDisplayed(locators._alphabinLogo);
    await utils.isElementExist(locators._homeButtonHomePage);
    await utils.isDisplayed(locators._homeButtonHomePage);
    await utils.isElementExist(locators._servicesButtonHomePage);
    await utils.isDisplayed(locators._servicesButtonHomePage);
    await utils.isElementExist(locators._aboutUsHomePage);
    await utils.isDisplayed(locators._aboutUsHomePage);
    await utils.isElementExist(locators._contactUsHomePage);
    await utils.isDisplayed(locators._contactUsHomePage);
    await utils.isElementExist(locators._loginButtonHomePage);
    await utils.isDisplayed(locators._loginButtonHomePage);
    await utils.isElementExist(locators._signupButtonHomePage);
    await utils.isDisplayed(locators._signupButtonHomePage);
  }

  static async verifyHeaderButtons() {
    await utils.getTextAndExpectValue(locators._alphabinLogo, 'Alpha Test');
    await utils.getTextAndExpectValue(locators._homeButtonHomePage, 'Home');
    await utils.getTextAndExpectValue(locators._servicesButtonHomePage, 'Services');
    await utils.getTextAndExpectValue(locators._aboutUsHomePage, 'About us');
    await utils.getTextAndExpectValue(locators._contactUsHomePage, 'Contact us');
    await utils.getTextAndExpectValue(locators._loginButtonHomePage, 'Log in');
    await utils.getTextAndExpectValue(locators._signupButtonHomePage, 'Sign up');
  }

  static async verifyDropDownServices() {
    await utils.hoverOverElement(locators._servicesButtonHomePage);
  }

  static async clickOnAlphaTestLogo() {
    await utils.clickOnElement(locators._alphabinLogo);
  }

  static async clickOnHomeButton() {
    await utils.clickOnElement(locators._homeButtonHomePage);
  }

  static async clickOnServices() {
    await utils.clickOnElement(locators._servicesButtonHomePage);
  }

  static async clickOnAboutUs() {
    await utils.clickOnElement(locators._aboutUsHomePage);
  }

  static async clickOnContactUs() {
    await utils.clickOnElement(locators._contactUsHomePage);
  }

  static async clickOnLogIn() {
    await utils.clickOnElement(locators._loginButtonHomePage);
  }

  static async clickOnSignUp() {
    await utils.clickOnElement(locators._signupButtonHomePage);
  }
}

module.exports = HeaderPage_HomePage;