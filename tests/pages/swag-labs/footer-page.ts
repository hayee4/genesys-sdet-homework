import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsFooterPage extends BasePage {
    readonly footer: Locator;
    readonly footerText: Locator;

    constructor(page: Page) {
        super(page);
        this.footer = page.locator('footer');
        this.footerText = page.locator('.footer_copy');
    }

    async getFooterText() {
        await this.footer.waitFor({ state: 'visible' });
        return this.footerText.textContent();
    }
}
