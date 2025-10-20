import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';

export class SeleniumTutorialPage extends BasePage {
    readonly title: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.guru99.com/selenium-tutorial.html');
        this.title = page.locator('h1');
        this.submitButton = page.locator('button[type="submit"]');
    }

    async waitForSeleniumTutorialPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
