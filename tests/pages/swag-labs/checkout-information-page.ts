import {Page, Locator} from "@playwright/test";
import { BasePage } from "../base-page";

export class SwagLabsCheckoutInformationPage extends BasePage {

    readonly title: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page, "https://www.saucedemo.com/checkout-step-one.html");
        this.title = page.locator('.title');
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async waitForCheckoutInformationPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}