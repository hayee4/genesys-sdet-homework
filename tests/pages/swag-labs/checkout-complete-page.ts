import {Page, Locator} from "@playwright/test";

export class SwagLabsCheckoutCompletePage {

    readonly page: Page;
    readonly completeTitle: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeTitle = page.locator('.title');
        this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
    }

}
