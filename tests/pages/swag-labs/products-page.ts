import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsProductsPage extends BasePage {
    private readonly title: Locator;

    private itemContainerByName = (itemName: string) =>
        this.page.locator('.inventory_item').filter({ hasText: itemName });

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/inventory.html');
        this.title = this.page.locator('.title');
    }

    public async addItemToCartByName(itemName: string) {
        const itemContainer = this.itemContainerByName(itemName);
        const addToCartButton = itemContainer.getByRole('button', { name: 'Add to cart' });
        await addToCartButton.click();
    }

    public async waitForProductsPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
