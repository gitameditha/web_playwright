import {Page} from 'playwright'
import { test, expect } from '@playwright/test';
import loginPage from '../pages_object/pages/login/login.page';

declare const page: Page;

test('As user I want to login',async ({page})=> {
    const loginpage = new loginPage(page);

    await loginpage.navigateToLoginPages();
    await loginpage.inputUserInformation();
    await loginpage.submitLogin();
});
