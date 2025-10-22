import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;
    protected readonly url?: string;

    constructor(page: Page, url?: string) {
        this.page = page;
        this.url = url;
    }

    public async goto() {
        if (this.url) {
            await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        }
    }

    public getUrl() {
        return this.url;
    }

    protected async waitForElementVisible(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }
}
