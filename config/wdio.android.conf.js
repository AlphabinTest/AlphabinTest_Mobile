const { config } = require('./wdio.shared.conf');
const currentDate = new Date().toLocaleDateString('en-IN');
const currentTime = new Date().toLocaleTimeString('en-IN');
const browserStack = process.env.browserstack;
console.log("BrowserStack:", browserStack);

if (browserStack === 'true') {
    config.capabilities = [
        {
            'browserstack.local': true,
            'browserstack.networkLogs': true,
            'platformName': 'Android',
            'browserName': 'chrome',
            'chromeOptions': {
                "args": ['--disable-web-security']
            },
            'deviceName': 'Samsung Galaxy S21',
            'platformVersion': '11.0',
            'project': 'Alphabin-project',
            'build': "Android - " + currentDate + " - " + currentTime,
            'chromedriverDisableBuildCheck': true
        }
    ];
    config.user = 'naman_sxuU92';
    config.key = 'VWtnAPxsH8CSrNxMDBiZ';
    config.services = [
        ['browserstack', {
            browserstackLocal: true
        }]
    ];
} else {
    config.capabilities = [
        {
            'platformName': 'Android',
            maxInstances: 10,
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '13.0',
            'appium:browserName': 'chrome',
            'appium:orientation': 'PORTRAIT',
            'appium:newCommandTimeout': 240,
            'appium:automationName': 'UiAutomator2',
        }
    ];
    config.path = '/wd/hub';
    config.port = 4723;
}

exports.config = config;