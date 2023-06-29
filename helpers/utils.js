const { assert, expect } = require('chai');
const fs = require('fs');
const testData = require('../testConfig.json');

class Utils {
  // Waits for the page to load
  static async waitForPageLoad(timeout) {
    const waitTimeout = timeout || 10000; // Set a default timeout value (in milliseconds)
    await browser.waitUntil(async () => {
      const readyState = await browser.execute(() => document.readyState);
      return readyState === 'complete';
    }, { timeout: waitTimeout, timeoutMsg: 'Page did not load within the specified timeout' });
  }

  // Get web page title text
  static async getTitle() {
    return await browser.getTitle();
  }

  // Get page source
  static async getPageSource() {
    console.log("Page source: ", await browser.getPageSource());
    await browser.getPageSource();
  }

  // Launch browser/apps on device
  static async launchApp() {
    await browser.launchApp();
  }

  // Delete cookies
  static async deleteCookies() {
    await browser.deleteCookies();
  }

  // Static wait for the browser/app
  static async pause(seconds) {
    await browser.pause(seconds * 1000);
  }

  // Refresh the page
  static async refresh() {
    await driver.refresh();
  }

  // Check if element is displayed
  static async isDisplayed(locator) {
    const el = await $(locator);
    return await el.isDisplayed();
  }

  // Click on a specific element
  static async click(locator) {
    const el = await $(locator);
    return await el.click();
  }

  // Click on a specific element using JavaScript
  static async clickJs(locator) {
    const element = await $(locator);
    await browser.execute((jsEl) => jsEl.click(), element);
  }

  // Scroll to view an element
  static async scrollToView(locator) {
    const el = await $(locator);
    await el.scrollIntoView();
  }

  // Wait for element to be visible
  static async waitForElement(locator, waitTimeInSeconds = 20) {
    const el = await $(locator);
    await el.waitForDisplayed({ timeout: waitTimeInSeconds * 1000 });
  }

  // Wait for element to exist
  static async waitForElementExist(locator, waitTimeInSeconds) {
    const el = await $(locator);
    await el.waitForExist({ timeout: waitTimeInSeconds * 1000 });
  }

  // Wait for element to not exist
  static async waitForElementNotExist(locator, waitTimeInSeconds = 60) {
    const el = await $(locator);
    await el.waitForExist({ timeout: waitTimeInSeconds * 1000, reverse: true });
  }

  // Check if element exists
  static async isElementExist(locator) {
    const el = await $(locator);
    expect(el).toExist();
  }

  // Clear text from input field
  static async clearText(locator) {
    const el = await $(locator);
    await el.clearValue();
    await browser.pause(500);
  }

  // Set value/text into input field
  static async setValue(locator, inputText, options = { slow: true }) {
    const el = await $(locator);
    return await el.setValue(inputText);
  }

  // Add value/text into input field
  static async addValue(locator, inputText) {
    await this.clearText(locator);
    const el = await $(locator);
    for (let i = 0; i < inputText.length; i++) {
      await el.addValue(inputText[i]);
    }
  }

  // Add value/text into input field using JavaScript
  static async addValueJS(locator, inputText) {
    const el = await $(locator);
    await browser.execute('arguments[0].value=""', el);
    await browser.execute('arguments[0].value=arguments[1]', el, inputText);
  }

  // Get the innerText of an element
  static async getText(locator) {
    const el = await $(locator);
    return await el.getText();
  }

  // Get element reference
  static async getElement(locator) {
    return await $(locator);
  }

  // Get elements reference
  static async getElements(locator) {
    return await $$(locator);
  }

  // Wait until the specified locator's text matches '2,823'
  static async waitUntil(locator, timeoutInSeconds = 20) {
    await browser.waitUntil(
      async () => (await $(locator).getText()) === '2,823',
      {
        timeout: timeoutInSeconds * 1000,
        timeoutMsg: 'Expected text to be different after 20s'
      }
    );
  }

  // Switch to a frame
  static async switchToFrame(locator) {
    await browser.switchToFrame(await $(locator));
  }

  // Switch to the parent frame
  static async switchToParentFrame() {
    await browser.switchToParentFrame();
  }

  // Switch to the default frame
  static async switchToDefault() {
    await browser.switchToDefault();
  }

  // Switch Appium web browser context to native context
  static async switchToNativeContext() {
    await browser.switchContext('NATIVE_APP');
  }

  // Switch Appium web browser context to browser context
  static async switchToWebContext() {
    const contexts = await browser.getContexts();
    if (config.config.capabilities[0].browserName == 'safari')
      await browser.switchContext(contexts[1]);
  }

  // Wait for element to be enabled
  static async waitForEnabled(locator, waitTimeInSeconds) {
    const el = await $(locator);
    await el.waitForEnabled({ timeout: waitTimeInSeconds * 1000 });
  }

  // Hover over an element
  static async hoverOverElement(locator) {
    await browser.moveTo(locator);
  }

  // Scroll until element is visible
  static async scrollUntilElementVisible(selector) {
    const element = await $(selector);
    while (!(await element.isDisplayed())) {
      await browser.executeScript('window.scrollBy(0, 100);');
      await browser.pause(500);
    }
  }

  // Type text into an element
  static async typeText(locator, value) {
    await browser.pause(1500);
    const el = $(locator);
    await el.setValue(value);
  }

  // Click on an element
  static async clickOnElement(locator) {
    await browser.pause(1500);
    const el = $(locator);
    await el.click();
  }

  // Get data from an element
  static async getData(locator) {
    const el = $(locator);
    return el.getText();
  }

  // Wait for an element to be displayed
  static async waitForElement(locator, timeOut) {
    const el = await $(locator);
    await el.waitForDisplayed(timeOut);
  }

  // Take a screenshot
  static async takeScreenshot() {
    try {
      await cucumberJson.attach(browser.takeScreenshot(), "image/png");
    } catch (err) {
      logger.error("Error " + err);
    }
  }

  // Pause for a specified time
  static async pauseTime(time) {
    await browser.pause(time);
  }

  // Get the current URL
  static async getCurrentUrl() {
    await browser.pause(1500);
    await browser.getUrl();
  }

  // Switch to a window with the specified URL
  static async switchWindow(url) {
    await browser.switchWindow(url);
  }

  // Close the current window
  static async closingWindow() {
    await browser.closeWindow();
  }

  // Accept an alert
  static async acceptAlert() {
    await browser.acceptAlert();
  }

  // Open the site specified in the testConfig.json file
  static async openSite() {
    const jsonData = fs.readFileSync('testConfig.json', 'utf8');
    const data = JSON.parse(jsonData);
    const url = data.baseUrl;
    await browser.url(url);
    await this.waitForPageLoad();
    await this.assertCurrentSite(testData.baseUrl);
  }

  // Assert that the current site's URL contains the specified site
  static async assertCurrentSite(actualSite) {
    expect(await browser.getUrl()).to.contain(actualSite);
  }

  // Wait for an element to be enabled
  static async waitForEnabled(locator, waitTimeInSeconds) {
    const el = await $(locator);
    await el.waitForEnabled({ timeout: waitTimeInSeconds * 1000 });
  }

  // Switch to the parent frame
  static async switchToParentFrame() {
    await browser.switchToParentFrame();
  }

  // Switch to the default frame
  static async switchToDefault() {
    await browser.switchToDefault();
  }

  // Wait until the specified locator's text matches '2,823'
  static async waitUntil(locator, timeoutInSeconds = 20) {
    await browser.waitUntil(
      async () => (await $(locator).getText()) === '2,823',
      {
        timeout: timeoutInSeconds * 1000,
        timeoutMsg: 'Expected text to be different after 20s'
      }
    );
  }

  // Check if an element exists
  static async isElementExist(locator) {
    const el = await $(locator);
    expect(el).to.be.exist;
  }

  // Check if an element is displayed
  static async isDisplayed(locator) {
    const el = await $(locator);
    return await el.isDisplayed();
  }

  // Get the text of an element and expect it to match the specified value
  static async getTextAndExpectValue(locator, expectedValue) {
    const element = await $(locator);
    const text = await element.getText();
    expect(text).to.equal(expectedValue);
  }

  // Check if an element is enabled
  static async isEnabled(locator) {
    const element = await $(locator);
    const isEnabled = await element.isEnabled();
    expect(isEnabled).to.be.true;
  }
}

module.exports = Utils;