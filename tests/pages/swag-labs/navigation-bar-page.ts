import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsNavigationBarPage extends BasePage {
    private readonly cartIcon: Locator;
    private readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page);
        this.cartIcon = this.page.locator('.shopping_cart_link');
        this.cartBadge = this.page.locator('.shopping_cart_badge');
    }

    public async getCartBadgeCount() {
        try {
            const isVisible = await this.cartBadge.isVisible();
            if (!isVisible) {
                return 0;
            }
            const text = await this.cartBadge.textContent();
            return parseInt(text || '0') || 0;
        } catch (error) {
            console.log('Error getting cart badge count:', error);
            return 0;
        }
    }

    public async proceedToCheckout() {
        await this.cartIcon.click();
    }
}
