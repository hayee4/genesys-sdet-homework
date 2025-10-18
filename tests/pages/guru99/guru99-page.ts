import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base-page";

export class Guru99Page extends BasePage {

    readonly title: Locator;
    readonly iFrame: Locator;

    constructor(page: Page) {
        super(page, "https://demo.guru99.com/test/guru99home/");
        this.title = page.locator("h2:has-text('THIS IS A DEMO PAGE FOR TESTING')");
        this.iFrame = page.locator('iframe#a077aa5e');
    }

    async waitForGuru99PageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}