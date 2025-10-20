import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsCartPage extends BasePage {
    readonly title: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/cart.html');
        this.title = page.locator('.title');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    async waitForCartPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
