import { Page, Locator } from '@playwright/test';

export class SwagLabsLoginPage {

    readonly page: Page;
    readonly title: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        // Using mixed locator strategies
        this.page = page;
        this.title = page.locator('.login_logo'); // Locator for the title element using class name
        this.usernameInput = page.getByTestId('username'); // Locator for the username input field using data-test
        this.passwordInput = page.getByLabel('Password'); // Locator for the password input field using label
        this.loginButton = page.getByRole('button', { name: 'Login' }); // Locator for the login button using role and name
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    
}

