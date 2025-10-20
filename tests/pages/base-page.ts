import { Locator, Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly url?: string;

    constructor(page: Page, url?: string) {
        this.page = page;
        this.url = url;
    }

    async goto() {
        if (this.url) {
            await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        }
    }

    async waitForElementVisible(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }
}
