import { Page, Locator } from "@playwright/test";

export class SwagLabsCartPage {

    readonly page: Page;
    readonly cartTitle: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.locator('.title');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    // async proceedToCheckout() {
    //     await this.checkoutButton.click();
    // }

}
