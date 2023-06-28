const { config } = require('../config/wdio.shared.conf')
let currentDate = new Date().toLocaleDateString('en-IN')
let currentTime = new Date().toLocaleTimeString('en-IN')
let browserStack = process.env.browserstack;
console.log("BrowserStack:", browserStack)

if (browserStack === 'true') {
    config.capabilities = [
        {
            // 'browserstack.debug': true, 
            'interactiveDebugging': true,
            'browserstack.local': true,
            'platformName': 'iOS',
            'device': 'iPhone 12 Pro',
            'os_version': '14',
            'browserName': 'safari',
            'realMobile': 'true',
            'project': 'Alphabin-project',
            "preventCrossSiteTracking" : "false",
            'build': "iOS - " + currentDate + " - " + currentTime
        },
    ],
    config.user = 'naman_sxuU92',
    config.key = 'VWtnAPxsH8CSrNxMDBiZ',
    config.services = [
        ['browserstack', {
            version: 8,
            testObservability: true,
            testObservabilityOptions: {
                projectName: "Alphabin mobile test",
                buildName: "Nightly regression"
            },
            browserstackLocal: true
        }]
    ]
} else {
    config.path = '/wd/hub',
    config.port = 4723,
    config.capabilities = [
        {
            'platformName': 'iOS',
            'deviceName': 'iPhone 12 Pro',
            'os_version': '15.0',
            'browserName': 'safari',
            'realMobile': 'true',
            'udid': 'A9235F44-27A0-49CA-AAB1-7D81B67DCB9C',
            'automationName': "XCUITest",
            'webkitAllowCrossover': 'true',
            'project': 'Alphabin-project',
            "preventCrossSiteTracking" : "false",
            'name': 'Alphabin-project',
        },
    ]
}
exports.config = config;