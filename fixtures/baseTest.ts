import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = baseTest.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export const expect = baseExpect;