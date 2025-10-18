import {Page, Locator} from "@playwright/test";
import { BasePage } from "../base-page";

export class SwagLabsCheckoutOverviewPage extends BasePage {

    readonly title: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        super(page, "https://www.saucedemo.com/checkout-step-two.html");
        this.title = page.locator('.title');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
    }

    async waitForCheckoutOverviewPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
