import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsLoginPage extends BasePage {
    readonly headerText: Locator;
    readonly usernameInput?: Locator;
    readonly passwordInput?: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/');
        this.headerText = page.locator('.login_logo');
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async login(username?: string, password?: string) {
        if (username != undefined) {
            await this.usernameInput?.fill(username);
        }

        if (password != undefined) {
            await this.passwordInput?.fill(password);
        }
        await this.loginButton.click();
    }

    async waitForErrorMessageToBeVisible() {
        await this.waitForElementVisible(this.errorMessage);
    }

    async waitForLoginPageToLoad() {
        await this.waitForElementVisible(this.headerText);
    }
}
