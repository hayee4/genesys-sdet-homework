import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base-page";

export class SwagLabsNavigationBarPage extends BasePage {

    readonly headerText: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page);
        this.headerText = page.locator('.app_logo');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async getCartBadgeCount(): Promise<number> {
        try {
            const isVisible = await this.cartBadge.isVisible();
            if (!isVisible) {
                // Badge not visible means cart is empty
                return 0;
            }
            const text = await this.cartBadge.textContent();
            return parseInt(text || '0') || 0;
        } catch (error) {
            console.log('Error getting cart badge count:', error);
            return 0;
        }
    }

    async proceedToCheckout() {
        await this.cartIcon.click();
    }
}