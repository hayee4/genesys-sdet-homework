import { Page, Locator } from "@playwright/test";
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
            await this.cartBadge.waitFor({ state: 'visible' });
            const text = await this.cartBadge.textContent();
            return text ? parseInt(text) : 0;
        } catch {
            return 0;
        }
    }

    async proceedToCheckout() {
        await this.cartIcon.click();
    }
}