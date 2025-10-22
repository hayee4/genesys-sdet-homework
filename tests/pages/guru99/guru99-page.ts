import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class Guru99MainPage extends BasePage {
    private readonly title: Locator;
    private readonly iFrame: Locator;
    private readonly menuContainer: Locator;
    private readonly testingMenuItem: Locator;
    private readonly seleniumSubMenuItem: Locator;

    constructor(page: Page) {
        super(page, 'https://demo.guru99.com/test/guru99home/');
        this.title = this.page.locator("h2:has-text('THIS IS A DEMO PAGE FOR TESTING')");
        this.iFrame = this.page.locator('iframe#a077aa5e');
        this.menuContainer = this.page.locator('.rt-container');
        this.testingMenuItem = this.menuContainer.getByRole('link', { name: 'Testing' }).first();
        this.seleniumSubMenuItem = this.menuContainer.getByRole('link', { name: 'Selenium' }).first();
    }

    public async clickIframe() {
        await this.waitForIFrameToLoad();
        await this.iFrame.click();
    }

    public async hoverOverTestingMenuItem() {
        await this.testingMenuItem.hover();
    }

    public async clickSeleniumSubMenuItem() {
        await this.seleniumSubMenuItem.click();
    }

    public async waitForGuru99PageToLoad() {
        await this.waitForElementVisible(this.title);
    }

    public async waitForIFrameToLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.waitForElementVisible(this.iFrame);
    }
}
