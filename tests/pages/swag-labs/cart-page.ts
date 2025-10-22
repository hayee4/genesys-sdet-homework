import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsCartPage extends BasePage {
    private readonly title: Locator;
    private readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/cart.html');
        this.title = this.page.locator('.title');
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
    }

    public async beginCheckout() {
        await this.checkoutButton.click();
    }

    public async waitForCartPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
