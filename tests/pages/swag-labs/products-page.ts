import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsProductsPage extends BasePage {
    readonly title: Locator;

    itemContainerByName = (itemName: string) => this.page.locator('.inventory_item').filter({ hasText: itemName });

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/inventory.html');
        this.title = page.locator('.title');
    }

    async addItemToCartByName(itemName: string) {
        const itemContainer = this.itemContainerByName(itemName);
        const addToCartButton = itemContainer.getByRole('button', { name: 'Add to cart' });
        await addToCartButton.click();
    }

    async waitForProductsPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
