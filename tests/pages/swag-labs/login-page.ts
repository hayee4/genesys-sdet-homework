import { Locator, Page } from '@playwright/test';
import creds from '../../resources/swag-labs/credential.json';

export class SwagLabsLoginPage {

    readonly page: Page;
    readonly header: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('.login_logo');
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginWithPerformanceGlitchUser() {
        await this.usernameInput.fill(creds.username);
        await this.passwordInput.fill(creds.password);
        await this.loginButton.click();
    }
}

