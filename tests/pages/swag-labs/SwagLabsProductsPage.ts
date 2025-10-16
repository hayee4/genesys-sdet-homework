import { Locator, Page, expect } from '@playwright/test';

export class SwagLabsProductsPage {

    readonly page: Page;
    readonly productsTitle: Locator;
    readonly sauceLabsBackpack: Locator;
    readonly sauceLabsFleeceJacket: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    itemContainerByName = (itemName: string) => this.page.locator('.inventory_item').filter({ hasText: itemName });

    constructor(page: Page) {
        this.page = page;
        this.productsTitle = page.locator('.title');
        this.sauceLabsBackpack = page.getByText('Sauce Labs Backpack');
        this.sauceLabsFleeceJacket = page.getByText('Sauce Labs Fleece Jacket');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addItemToCartByName(itemName: string) {
        const itemContainer = this.itemContainerByName(itemName);
        const addToCartButton = itemContainer.getByRole('button', { name: 'Add to cart' });
        await addToCartButton.click();
        await expect(addToCartButton).toHaveText('Remove');
    }

    async checkCartBadgeByCount(expectedCount: number) {
        await expect(this.cartBadge).toHaveText(expectedCount.toString());
    }
}
