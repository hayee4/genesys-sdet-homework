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
    private readonly page: Page;

    private loginPage?: SwagLabsLoginPage;
    private productsPage?: SwagLabsProductsPage;
    private cartPage?: SwagLabsCartPage;
    private checkoutInfoPage?: SwagLabsCheckoutInformationPage;
    private checkoutOverviewPage?: SwagLabsCheckoutOverviewPage;
    private checkoutCompletePage?: SwagLabsCheckoutCompletePage;
    private navigationBarPage?: SwagLabsNavigationBarPage;
    private footerPage?: SwagLabsFooterPage;

    constructor(page: Page) {
        this.page = page;
    }

    public get login() {
        if (!this.loginPage) {
            this.loginPage = new SwagLabsLoginPage(this.page);
        }
        return this.loginPage;
    }

    public get products() {
        if (!this.productsPage) {
            this.productsPage = new SwagLabsProductsPage(this.page);
        }
        return this.productsPage;
    }

    public get cart() {
        if (!this.cartPage) {
            this.cartPage = new SwagLabsCartPage(this.page);
        }
        return this.cartPage;
    }

    public get checkoutInfo() {
        if (!this.checkoutInfoPage) {
            this.checkoutInfoPage = new SwagLabsCheckoutInformationPage(this.page);
        }
        return this.checkoutInfoPage;
    }

    public get checkoutOverview() {
        if (!this.checkoutOverviewPage) {
            this.checkoutOverviewPage = new SwagLabsCheckoutOverviewPage(this.page);
        }
        return this.checkoutOverviewPage;
    }

    public get checkoutComplete() {
        if (!this.checkoutCompletePage) {
            this.checkoutCompletePage = new SwagLabsCheckoutCompletePage(this.page);
        }
        return this.checkoutCompletePage;
    }

    public get navigationBar() {
        if (!this.navigationBarPage) {
            this.navigationBarPage = new SwagLabsNavigationBarPage(this.page);
        }
        return this.navigationBarPage;
    }

    public get footer() {
        if (!this.footerPage) {
            this.footerPage = new SwagLabsFooterPage(this.page);
        }
        return this.footerPage;
    }
}
