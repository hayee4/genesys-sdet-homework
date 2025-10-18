import {Page, Locator} from "@playwright/test";

export class SwagLabsCheckoutOverviewPage {

    readonly page: Page;
    readonly overviewTitle: Locator;
    readonly finishButton: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.overviewTitle = page.locator('.title');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
    }

}
