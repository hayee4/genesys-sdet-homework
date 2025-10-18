import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsProductsPage extends BasePage {

    readonly title: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    itemContainerByName = (itemName: string) => this.page.locator('.inventory_item').filter({ hasText: itemName });

    constructor(page: Page) {
        super(page, "https://www.saucedemo.com/inventory.html");
        this.title = page.locator('.title');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addItemToCartByName(itemName: string) {
        const itemContainer = this.itemContainerByName(itemName);
        const addToCartButton = itemContainer.getByRole('button', { name: 'Add to cart' });
        await addToCartButton.click();
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

    async waitForProductsPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
