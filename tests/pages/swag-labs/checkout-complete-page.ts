import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsCheckoutCompletePage extends BasePage {
    readonly title: Locator;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/checkout-complete.html');
        this.completeHeader = page.locator('.complete-header');
        this.completeText = page.locator('.complete-text');
        this.title = page.locator('.title');
        this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
    }

    async waitForCheckoutCompletePageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
