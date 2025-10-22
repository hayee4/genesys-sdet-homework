import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SeleniumTutorialPage extends BasePage {
    private readonly title: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.guru99.com/selenium-tutorial.html');
        this.title = this.page.locator('h1');
        this.submitButton = this.page.locator('button[type="submit"]');
    }

    public async waitForSeleniumTutorialPageToLoad() {
        await this.waitForElementVisible(this.title);
    }

    public async isSubmitButtonVisible() {
        return await this.submitButton.isVisible();
    }
}
