import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsCheckoutOverviewPage extends BasePage {
    private readonly title: Locator;
    private readonly finishButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/checkout-step-two.html');
        this.title = this.page.locator('.title');
        this.finishButton = this.page.getByRole('button', { name: 'Finish' });
    }

    public async getItemByName(itemName: string) {
        return this.page.locator(`.cart_item:has-text("${itemName}")`);
    }

    public async clickFinishButton() {
        await this.finishButton.click();
    }

    public async waitForCheckoutOverviewPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
