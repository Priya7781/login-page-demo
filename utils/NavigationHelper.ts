import type { Page } from '@playwright/test';

export class NavigationHelper {

  static async openLoginPage(page: Page) {
    await page.goto('https://www.saucedemo.com/');
    
    await page.waitForLoadState('load');
  }
}