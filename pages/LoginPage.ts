import type { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username = '#user-name';
    readonly password = '#password';
    readonly loginBtn = '#login-button';

    constructor(page: Page) {
        this.page = page;
    }

    async login(user: string, pass: string) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }
}