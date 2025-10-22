import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsFooterPage extends BasePage {
    private readonly footer: Locator;
    private readonly footerText: Locator;

    constructor(page: Page) {
        super(page);
        this.footer = this.page.locator('footer');
        this.footerText = this.page.locator('.footer_copy');
    }

    public async scrollIntoFooterMessageViewIfNeeded() {
        await this.footer.scrollIntoViewIfNeeded();
    }

    public async getFooterText() {
        await this.footer.waitFor({ state: 'visible' });
        return this.footerText.textContent();
    }
}
