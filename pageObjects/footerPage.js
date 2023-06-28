const utils = require('../helpers/utils');
const locators = require('../locators/footerLocators.json');

class FooterPage_HomePage {
  static async footerElementsVerification() {
    await utils.getTextAndExpectValue(locators._alphaTestTitle, "Alpha Test");
    await utils.getTextAndExpectValue(locators._alphaTestPara, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ducimus accusantium corrupti quod odio exercitationem doloribus laborum illo maiores sit.");
    await utils.getTextAndExpectValue(locators._allServices, "All Services");
    await utils.getTextAndExpectValue(locators._uiTesting, "UI Testing");
    await utils.getTextAndExpectValue(locators._functionalTesting, "Functional Testing");
    await utils.getTextAndExpectValue(locators._usabilityTesting, "Usability Testing");
    await utils.getTextAndExpectValue(locators._performanceTesting, "Performance Testing");
    await utils.getTextAndExpectValue(locators._usefulLinks, "Userful Links");
    await utils.getTextAndExpectValue(locators._aboutUs, "About Us");
    await utils.getTextAndExpectValue(locators._contactUs, "Contact Us");
    await utils.getTextAndExpectValue(locators._blog, "Blog");
    await utils.getTextAndExpectValue(locators._social, "Social");
    await utils.isDisplayed(locators._linkedinIcon);
    await utils.isDisplayed(locators._skypeIcon);
    await utils.isDisplayed(locators._instagramIcon);
    await utils.isDisplayed(locators._facebookIcon);
    await utils.isDisplayed(locators._twitterIcon);
  }
}

module.exports = FooterPage_HomePage;