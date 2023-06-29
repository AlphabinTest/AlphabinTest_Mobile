const utils = require('../helpers/utils')
const homePage = require('../pageObjects/homePage')
const signUpPage = require('../pageObjects/signUpPage')
const loginPage = require('../pageObjects/loginPage')

const currentTimestamp = Date.now();
const username = `username${currentTimestamp}`;
const email = `test${currentTimestamp}@gmail.com`;

describe('Verify the header part of the Home Page', async () => {
  before("Move to home page", async () => {
    await utils.openSite();
  })
  it('Verify all the buttons', async () => {
    await homePage.verifyHeaderPageDetails();
  })
})

describe('Verify the Hero page of the Home Page', async () => {
  before("Move to home page", async () => {
    await utils.openSite();
  })
  it("Verify the content of Hero page on Home page", async () => {
    await homePage.verifyHeroPageDetails();
    await homePage.verifyServicesOnHomePage();
  })
})

describe('Verify the Footer of the Home page', async () => {
  before("Move to home page", async () => {
    await utils.openSite();
  })
  it("Verify the content of Footer section on Home page", async () => {
    await homePage.verifyFooterOfHomePage();
  })
})

describe('verify The user is able to register successfully', async () => {
  before("Move to home page", async () => {
    await utils.openSite();
  })
  it('Verify all the elements on the sign up page', async () => {
    await homePage.clickOnSignUpButton();
    await signUpPage.verifyTheSignUpForm();
  })
  xit('Click on the sign up button on the home page and fill in the sign up form', async () => {
    await homePage.clickOnSignUpButton();
    await signUpPage.signUpForm(username, email);
  })
})

describe('Verify the user is able to log in successfully', async () => {
  before("Move to home page", async () => {
    await utils.openSite();
  })
  it('Verify all the elements on the login page', async () => {
    await homePage.clickOnLogInButton();
    await loginPage.verifyTheLoginForm();
  })
  xit('Click on the log in button from home page and fill in the login form', async () => {
    await homePage.clickOnLogInButton();
    await loginPage.loginForm();
  })
})

describe('Verify all the services on the Hero Page', async () => {
  before("Move to home page", async () => {
    await utils.openSite();
  })
  it('Click on each individual service and verify it', async () => {
    await homePage.verifyServicesOnHomePage();
  })
})