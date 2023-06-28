const utils = require('../helpers/utils');
const locators = require('../locators/heroPageLocators.json');

class HeroPage_HomePage {
  static async verifyHeroPage() {
    await utils.getTextAndExpectValue(locators._qaStrategiesDisplayHeroPage, 'Empowering Your Business with Our Proven QA Strategies');
    await utils.getTextAndExpectValue(locators._deliveringQualityDisplayHeroPage, 'Delivering Quality Excellence with Our Comprehensive QA Solutions');
    await utils.isElementExist(locators._strategiesButtonHeroPage);
    await utils.getTextAndExpectValue(locators._strategiesButtonHeroPage, 'Experience the Benefits of Our QA Strategies Now!');
    await utils.isElementExist(locators._qaImageHeroPage);
    await utils.getTextAndExpectValue(locators._ourServicesTextHeroPage, 'Our Services');
  }

  static async ourServicesHeroPageExistence() {
    await utils.isDisplayed(locators._serviceOneModelTesting);
    await utils.isEnabled(locators._serviceOneModelTesting);

    await utils.isDisplayed(locators._serviceTwoWebAutomation);
    await utils.isEnabled(locators._serviceTwoWebAutomation);

    await utils.isDisplayed(locators._serviceThreeMobileUI);
    await utils.isEnabled(locators._serviceThreeMobileUI);

    await utils.isDisplayed(locators._serviceFourAPITesting);
    await utils.isEnabled(locators._serviceFourAPITesting);

    await utils.isDisplayed(locators._serviceFiveSmartUITesting);
    await utils.isEnabled(locators._serviceFiveSmartUITesting);

    await utils.isDisplayed(locators._serviceSixCapacityPlanning);
    await utils.isEnabled(locators._serviceSixCapacityPlanning);

    await utils.isDisplayed(locators._serviceSevenManualFunctional);
    await utils.isEnabled(locators._serviceSevenManualFunctional);
  }

  static async ourServicesHeroPageVerification() {
    await utils.getTextAndExpectValue(locators._modelTestingTitle, 'AI/ML Model Testing');
    await utils.getTextAndExpectValue(locators._modelTestingPara, 'Ensure the accuracy, reliability, and performance of your AI/ML models with comprehensive testing solutions.');
    await utils.getTextAndExpectValue(locators._uiAutomationTitle, 'UI Automation Testing (Web)');
    await utils.getTextAndExpectValue(locators._uiAutomationPara, "Save time and improve accuracy with automated testing of your web application's user interface.");
    await utils.getTextAndExpectValue(locators._mobileAutomationTitle, "UI Automation Testing (Mobile)");
    await utils.getTextAndExpectValue(locators._mobileAutomationPara, "Ensure a seamless user experience across multiple devices and platforms with automated mobile UI testing.");
    await utils.getTextAndExpectValue(locators._apiTestingTitle, 'API Automation Testing');
    await utils.getTextAndExpectValue(locators._apiTestingPara, 'Streamline your development process and improve the quality of your APIs with automated testing.');
    await utils.getTextAndExpectValue(locators._smartUITitle, 'Smart UI Automation Testing (Web)');
    await utils.getTextAndExpectValue(locators._smartUIPara, "Utilize AI-powered testing to optimize your web application's user interface and user experience.");
    await utils.getTextAndExpectValue(locators._capacityPlanningTitle, "QA Performance & Capacity Planning");
    await utils.getTextAndExpectValue(locators._capcityPlanningPara, "Ensure your application can handle high traffic loads and provide optimal performance for your users.");
    await utils.getTextAndExpectValue(locators._manualFunctionalTitle, 'Manual Functional Testing');
    await utils.getTextAndExpectValue(locators._manualFuncitonPara, 'Ensure that your software meets the functional requirements of your users with thorough manual testing.');
  }

  static async depthVerificationOfServices() {
    await utils.scrollUntilElementVisible(locators._apiTestingTitle);
    await utils.clickOnElement(locators._modelTestingTitle);
    await utils.waitForPageLoad();
  }
}

module.exports = HeroPage_HomePage;