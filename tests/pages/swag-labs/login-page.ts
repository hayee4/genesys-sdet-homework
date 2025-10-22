import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsLoginPage extends BasePage {
    private readonly headerText: Locator;
    private readonly usernameInput?: Locator;
    private readonly passwordInput?: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/');
        this.headerText = this.page.locator('.login_logo');
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.errorMessage = this.page.locator('[data-test="error"]');
    }

    public async login(username?: string, password?: string) {
        if (username != undefined) {
            await this.usernameInput?.fill(username);
        }
        if (password != undefined) {
            await this.passwordInput?.fill(password);
        }
        await this.loginButton.click();
    }

    public async getErrorMessageText() {
        await this.waitForElementVisible(this.errorMessage);
        return await this.errorMessage.textContent();
    }

    public async waitForErrorMessageToBeVisible() {
        await this.waitForElementVisible(this.errorMessage);
    }

    public async waitForLoginPageToLoad() {
        await this.waitForElementVisible(this.headerText);
    }
}
