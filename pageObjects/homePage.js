const utils = require('../helpers/utils')
const headerHomePage = require('./headerPage')
const heroHomePage = require('./heroPage')
const footerHomePage = require('./footerPage')


class HomePage
{
    //All the following tests are for the header of the Home page
    static async verifyHeaderPageDetails()
    {
        await headerHomePage.headerButtonsExistence();
        await headerHomePage.verifyHeaderButtons();
    }

    static async clickOnLogInButton()
    {
        await headerHomePage.clickOnLogIn();
        await utils.waitForPageLoad();
    }

    static async clickOnSignUpButton()
    {
        await headerHomePage.clickOnSignUp();
        await utils.waitForPageLoad();
    }

    //All the following tests are for Hero page of the Home page
    static async verifyHeroPageDetails()
    {
        await heroHomePage.verifyHeroPage();
    }

    static async verifyServicesOnHomePage()
    {
        await heroHomePage.ourServicesHeroPageExistence();
        await heroHomePage.ourServicesHeroPageVerification();
        await heroHomePage.depthVerificationOfServices();
    }

    //All the following tests are for the footer section of the Home page
    static async verifyFooterOfHomePage()
    {
        await footerHomePage.footerElementsVerification();
    }
}
module.exports = HomePage