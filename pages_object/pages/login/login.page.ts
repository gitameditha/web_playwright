import {Page} from 'playwright'
import {loginLocator} from '../../locator/login/login.locator'
import {homePageLocator} from '../../locator/home-page/homePage.locator'
import { BasePage } from '../base_pages.page';
const env = require('dotenv').config();

export default class loginPage extends BasePage{
    
    login = new loginLocator();
    homepage = new homePageLocator();

    constructor(page: Page) {
        super(page);  // call Basepage
    }

    async navigateToLoginPages() {
        await this.navigate(process.env.PATH_LOGIN!);
    }

    async inputUserInformation() {
        await this.page.type(this.login.loginInputEmail, process.env.DFE_BUSINESS_USER_EMAIL!);
        await this.page.type(this.login.loginInputPassword, process.env.DFE_BUSINESS_USER_PASSWORD!);
    }

    async submitLogin() {
        await this.page.click(this.login.loginSubmitButton);
        await this.page.waitForSelector(this.homepage.DFELogo);
    }
}
