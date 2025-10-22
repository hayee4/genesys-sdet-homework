import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SwagLabsCheckoutInformationPage extends BasePage {
    private readonly title: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page, 'https://www.saucedemo.com/checkout-step-one.html');
        this.title = this.page.locator('.title');
        this.firstNameInput = this.page.getByPlaceholder('First Name');
        this.lastNameInput = this.page.getByPlaceholder('Last Name');
        this.postalCodeInput = this.page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
    }

    public async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    public async waitForCheckoutInformationPageToLoad() {
        await this.waitForElementVisible(this.title);
    }
}
