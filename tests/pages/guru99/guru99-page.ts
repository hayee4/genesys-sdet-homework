import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base-page";

export class Guru99MainPage extends BasePage {

    readonly title: Locator;
    readonly iFrame: Locator;
    readonly menuContainer: Locator;
    readonly testingLink: Locator;
    readonly seleniumLink: Locator;

    constructor(page: Page) {
        super(page, "https://demo.guru99.com/test/guru99home/");
        this.title = page.locator("h2:has-text('THIS IS A DEMO PAGE FOR TESTING')");
        this.iFrame = page.locator('iframe#a077aa5e');
        this.menuContainer = page.locator('.rt-container');
        this.testingLink = this.menuContainer.getByRole('link', { name: 'Testing' }).first();
        this.seleniumLink = this.menuContainer.getByRole('link', { name: 'Selenium' }).first();
    }

    async waitForGuru99PageToLoad() {
        await this.waitForElementVisible(this.title);
    }

    async waitForSubMenuToLoad() {
        await this.waitForElementVisible(this.seleniumLink);
    }
}