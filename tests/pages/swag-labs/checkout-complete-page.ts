import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsCheckoutCompletePage extends BasePage {
    private readonly title: Locator;
    private readonly completeHeader: Locator;
    private readonly completeText: Locator;
    private readonly backHomeButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/checkout-complete.html');
        this.completeHeader = this.page.locator('.complete-header');
        this.completeText = this.page.locator('.complete-text');
        this.title = this.page.locator('.title');
        this.backHomeButton = this.page.getByRole('button', { name: 'Back Home' });
    }

    public async returnToProductsPage() {
        await this.backHomeButton.click();
    }

    public async waitForCheckoutCompletePageToLoad() {
        await this.waitForElementVisible(this.title);
    }

    public async waitForCompleteHeaderToBeVisible() {
        await this.waitForElementVisible(this.completeHeader);
    }

    public async waitForCompleteTextToBeVisible() {
        await this.waitForElementVisible(this.completeText);
    }

    public async getCompleteHeader() {
        await this.waitForElementVisible(this.completeHeader);
        return await this.completeHeader.textContent();
    }

    public async getCompleteText() {
        await this.waitForElementVisible(this.completeText);
        return await this.completeText.textContent();
    }
}
