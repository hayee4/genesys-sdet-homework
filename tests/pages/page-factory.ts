import { Page } from '@playwright/test';
import { SwagLabsLoginPage } from './swag-labs/login-page';
import { SwagLabsProductsPage } from './swag-labs/products-page';
import { SwagLabsCartPage } from './swag-labs/cart-page';
import { SwagLabsCheckoutInformationPage } from './swag-labs/checkout-information-page';
import { SwagLabsCheckoutOverviewPage } from './swag-labs/checkout-overview-page';
import { SwagLabsCheckoutCompletePage } from './swag-labs/checkout-complete-page';

export class SwagLabsPageFactory {
    
    readonly page: Page;
    
    private _loginPage?: SwagLabsLoginPage;
    private _productsPage?: SwagLabsProductsPage;
    private _cartPage?: SwagLabsCartPage;
    private _checkoutInfoPage?: SwagLabsCheckoutInformationPage;
    private _checkoutOverviewPage?: SwagLabsCheckoutOverviewPage;
    private _checkoutCompletePage?: SwagLabsCheckoutCompletePage;

    constructor(page: Page) {
        this.page = page;
    }

    get login(): SwagLabsLoginPage {
        if (!this._loginPage) {
            this._loginPage = new SwagLabsLoginPage(this.page);
        }
        return this._loginPage;
    }

    get products(): SwagLabsProductsPage {
        if (!this._productsPage) {
            this._productsPage = new SwagLabsProductsPage(this.page);
        }
        return this._productsPage;
    }

    get cart(): SwagLabsCartPage {
        if (!this._cartPage) {
            this._cartPage = new SwagLabsCartPage(this.page);
        }
        return this._cartPage;
    }

    get checkoutInfo(): SwagLabsCheckoutInformationPage {
        if (!this._checkoutInfoPage) {
            this._checkoutInfoPage = new SwagLabsCheckoutInformationPage(this.page);
        }
        return this._checkoutInfoPage;
    }

    get checkoutOverview(): SwagLabsCheckoutOverviewPage {
        if (!this._checkoutOverviewPage) {
            this._checkoutOverviewPage = new SwagLabsCheckoutOverviewPage(this.page);
        }
        return this._checkoutOverviewPage;
    }

    get checkoutComplete(): SwagLabsCheckoutCompletePage {
        if (!this._checkoutCompletePage) {
            this._checkoutCompletePage = new SwagLabsCheckoutCompletePage(this.page);
        }
        return this._checkoutCompletePage;
    }
}