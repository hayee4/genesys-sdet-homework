import { Page } from '@playwright/test';
import { SwagLabsCartPage } from './cart-page';
import { SwagLabsCheckoutCompletePage } from './checkout-complete-page';
import { SwagLabsCheckoutInformationPage } from './checkout-information-page';
import { SwagLabsCheckoutOverviewPage } from './checkout-overview-page';
import { SwagLabsFooterPage } from './footer-page';
import { SwagLabsLoginPage } from './login-page';
import { SwagLabsNavigationBarPage } from './navigation-bar-page';
import { SwagLabsProductsPage } from './products-page';

export class SwagLabsPageFactory {
    readonly page: Page;

    private _loginPage?: SwagLabsLoginPage;
    private _productsPage?: SwagLabsProductsPage;
    private _cartPage?: SwagLabsCartPage;
    private _checkoutInfoPage?: SwagLabsCheckoutInformationPage;
    private _checkoutOverviewPage?: SwagLabsCheckoutOverviewPage;
    private _checkoutCompletePage?: SwagLabsCheckoutCompletePage;
    private _navigationBarPage?: SwagLabsNavigationBarPage;
    private _footerPage?: SwagLabsFooterPage;

    constructor(page: Page) {
        this.page = page;
    }

    get login() {
        if (!this._loginPage) {
            this._loginPage = new SwagLabsLoginPage(this.page);
        }
        return this._loginPage;
    }

    get products() {
        if (!this._productsPage) {
            this._productsPage = new SwagLabsProductsPage(this.page);
        }
        return this._productsPage;
    }

    get cart() {
        if (!this._cartPage) {
            this._cartPage = new SwagLabsCartPage(this.page);
        }
        return this._cartPage;
    }

    get checkoutInfo() {
        if (!this._checkoutInfoPage) {
            this._checkoutInfoPage = new SwagLabsCheckoutInformationPage(this.page);
        }
        return this._checkoutInfoPage;
    }

    get checkoutOverview() {
        if (!this._checkoutOverviewPage) {
            this._checkoutOverviewPage = new SwagLabsCheckoutOverviewPage(this.page);
        }
        return this._checkoutOverviewPage;
    }

    get checkoutComplete() {
        if (!this._checkoutCompletePage) {
            this._checkoutCompletePage = new SwagLabsCheckoutCompletePage(this.page);
        }
        return this._checkoutCompletePage;
    }

    get navigationBar() {
        if (!this._navigationBarPage) {
            this._navigationBarPage = new SwagLabsNavigationBarPage(this.page);
        }
        return this._navigationBarPage;
    }

    get footer() {
        if (!this._footerPage) {
            this._footerPage = new SwagLabsFooterPage(this.page);
        }
        return this._footerPage;
    }
}
