import { test, expect } from '../fixtures/baseTest';
import { loginData } from '../utils/testData';
import { NavigationHelper } from '../utils/NavigationHelper';

test('Valid Login Test', async ({ page, loginPage }) => {
    await NavigationHelper.openLoginPage(page);
    await loginPage.login(loginData.username, loginData.password);

    await expect(page).toHaveURL(/inventory/);
});