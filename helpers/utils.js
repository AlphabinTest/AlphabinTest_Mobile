const { assert, expect } = require('chai')
const fs = require('fs');

class Utils {
  static async waitForPageLoad(timeout) {
    const waitTimeout = timeout || 10000; // Set a default timeout value (in milliseconds)
    await browser.waitUntil(async () => {
      const readyState = await browser.execute(() => document.readyState);
      return readyState === 'complete';
    }, { timeout: waitTimeout, timeoutMsg: 'Page did not load within the specified timeout' });
  }
  

    // Get web page title text
    static async getTitle() {
        return await browser.getTitle()
    }

    static async getPageSource() {
        console.log("Page source : ", await browser.getPageSource())
        await browser.getPageSource()
    }

    // Launch browser/apps on device
    static async launchApp() {
        await browser.launchApp()
    }

    // deleteCookies
    static async deleteCookies() {
        await browser.deleteCookies()
    }

    // Static wait for the browser/app
    static async pause(seconds) {
        await browser.pause(seconds * 1000)
    }

    // browser to reload the page
    static async refresh() {
        await driver.refresh()
    }

    // Get element is visible status
    static async isDisplayed(locator) {
        // console.log('Element is : ',typeof locator)
        const el = await $(locator)
        return await el.isDisplayed()
    }

    // Click on specific element
    static async click(locator) {
        const el = await $(locator)
        return await el.click()
    }

    // Click on specific element using javascript
    static async clickJs(locator) {
        const element = await $(locator)
        await browser.execute((jsEl) => jsEl.click(), element)
        //await browser.execute((element) => element.click())
    }

    // Scroll to view element into viewport 
    static async scrollToView(locator) {
        const el = await $(locator)
        // await browser.pause(1000)
        await el.scrollIntoView()
        // await browser.pause(2000)
    }

    // Wait for element to be visible on DOM/Web page
    static async waitForElement(locator, waitTimeInSeconds = 20) {
        const el = await $(locator)
        await el.waitForDisplayed({ timeout: waitTimeInSeconds * 1000 })
    }

    // Wait for element is exists on DOM/Web page
    static async waitForElementExist(locator, waitTimeInSeconds) {
        const el = await $(locator)
        await el.waitForExist({ timeout: waitTimeInSeconds * 1000 })
    }

    // Wait for element is not exists on DOM/Web page
    static async waitForElementNotExist(locator, waitTimeInSeconds = 60) {
        const el = await $(locator)
        await el.waitForExist({ timeout: waitTimeInSeconds * 1000, reverse: true })
    }

    // Check element is exists
    static async isElementExist(locator) {
        const el = await $(locator)
        expect(el).toExist()
    }

    // Remove text from Input/Text field
    static async clearText(locator) {
        const el = await $(locator)
        await el.clearValue()
        await browser.pause(500)
    }

    // Add some value & text into Input/Text field
    static async setValue(locator, inputText, options = { slow: true }) {
        // await this.clearText(locator)
        const el = await $(locator)
        return await el.setValue(inputText)
        // await browser.pause(500)             
    }

    static async addValue(locator, inputText) {
        await this.clearText(locator)
        const el = await $(locator)
        // return await el.addValue(inputText)
        // await browser.pause(500)
        for (let i = 0; i < inputText.length; i++) {
            await el.addValue(inputText[i])
        }
    }

    static async addValueJS(locator, inputText) {
        // await this.clearText(locator)
        const el = await $(locator)
        await browser.execute('arguments[0].value=""', el)
        await browser.execute('arguments[0].value=arguments[1]', el, inputText)
    }

    // Get element innerText
    static async getText(locator) {
        // console.log('Element is : ', typeof locator)
        const el = await $(locator)
        return await el.getText()
    }

    // Get element reference
    static async getElement(locator) {
        return await $(locator)
    }

    // Get elements reference
    static async getElements(locator) {
        return await $$(locator)
    }

    static async waitUntil(locator, timeoutInSeconds = 20) {
        await browser.waitUntil(
            async () => (await $(locator).getText()) === '2,823',
            {
                timeout: timeoutInSeconds * 1000, // 20 seconds                         
                timeoutMsg: 'expected text to be different after 20s'
            }
        )
    }

    static async switchToFrame(locator) {
        console.log("switchToFrame : ", locator)
        await browser.switchToFrame(await $(locator))

    }

    static async switchToParentFrame() {
        await browser.switchToParentFrame()
    }

    static async switchToDefault() {
        await browser.switchToDefault()
    }

    // Switch appium webbrowser context control to native context
    static async switchToNativeContext() {
        await browser.switchContext('NATIVE_APP')
    }

    // Switch appium webbrowser context control to browser context
    static async switchToWebContext() {
        const contexts = await browser.getContexts()
        if (config.config.capabilities[0].browserName == 'safari')
            await browser.switchContext(contexts[1])
    }

    static async waitForEnabled(locator, waitTimeInSeconds) {
        const el = await $(locator)
        await el.waitForEnabled({ timeout: waitTimeInSeconds * 1000 })

    }
    static async hoverOverElement(locator) {
        await browser.moveTo(locator);
      }
      static async scrollUntilElementVisible(selector) {
        const element = await $(selector);
        while (!(await element.isDisplayed())) {
          // Perform scroll action here
          await browser.executeScript('window.scrollBy(0, 100);');
          // Wait for a small delay after scrolling
          await browser.pause(500);
        }
      }
    
      static async typeText(locator, value) {
        await browser.pause(1500)
        const el = $(locator)
        await el.setValue(value)
      }
    
      static async clickOnElement(locator) {
        await browser.pause(1500)
        const el = $(locator)
        await el.click()
      }
    
      static async getData(locator) {
        const el = $(locator)
        return el.getText()
      }
    
      static async waitForElement(locator, timeOut) {
        const el = await $(locator)
        await el.waitForDisplayed(timeOut)
      }
    
      static async takeScreenshot() {
        try {
          await cucumberJson.attach(browser.takeScreenshot(), "image/png");
        } catch (err) {
          logger.error("Error " + err);
        }
      }
      static async pauseTime(time) {
        await browser.pause(time)
      }
    
      static async getCurrentUrl() {
        await browser.pause(1500)
        await browser.getUrl()
      }
    
      static async switchWindow(url) {
        await browser.switchWindow(url)
      }
    
      static async closingWindow() {
        await browser.closeWindow()
      }
    
      static async acceptAlert() {
        await browser.acceptAlert()
      }
    
      static async openSite() {
        //Read the JSON file
        const jsonData = fs.readFileSync('testConfig.json', 'utf8');
      
        // Parse the JSON data
        const data = JSON.parse(jsonData);
      
        // Extract the URL from the JSON data
        const url = data.baseUrl;
      
        // Open the site using the extracted URL
        await browser.url(url);
      }
    
      static async assertCurrentSite(actualSite) {
        expect(await browser.getUrl()).to.contain(actualSite)
      }
    
      static async waitForEnabled(locator, waitTimeInSeconds) {
        const el = await $(locator)
        await el.waitForEnabled({ timeout: waitTimeInSeconds * 1000 })
      }
      static async switchToParentFrame() {
        await browser.switchToParentFrame()
      }
    
      static async switchToDefault() {
        await browser.switchToDefault()
      }
    
      static async waitUntil(locator, timeoutInSeconds = 20) {
        await browser.waitUntil(
          async () => (await $(locator).getText()) === '2,823',
          {
            timeout: timeoutInSeconds * 1000, // 20 seconds                         
            timeoutMsg: 'expected text to be different after 20s'
          }
        )
      }
    
      static async isElementExist(locator) {
        const el = await $(locator)
        expect(el).to.be.exist
    
      }
      static async isDisplayed(locator) {
        // console.log('Element is : ',typeof locator)
        const el = await $(locator)
        return await el.isDisplayed()
      }
    
      static async getTextAndExpectValue(locator, expectedValue) {
        const element = await $(locator);
        const text = await element.getText();
        expect(text).to.equal(expectedValue);
      }
    
      static async isEnabled(locator) {
        const element = await $(locator);
        const isEnabled = await element.isEnabled();
        expect(isEnabled).to.be.true;
      }
}

module.exports = Utils