import { expect, test } from '@playwright/test';
import { SwagLabsPageFactory } from '../../pages/page-factory';
import { TEST_SCENARIOS, CUSTOMER_INFO } from '../../resources/swag-labs/test-data';
import creds from '../../resources/swag-labs/credential_performance_glitch_user.json';


test.describe('Swag Labs Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        const pages = new SwagLabsPageFactory(page);
        await pages.login.goto();
        await pages.login.waitForLoginPageToLoad();
        await expect(page).toHaveURL(pages.login.url!);
    });

    test('Automate Purchase Process - Test Case 1', async ({ page }) => {
        const pages = new SwagLabsPageFactory(page);
        await pages.login.login(creds.username, creds.password);
        await pages.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(pages.products.url!);
        for (const item of TEST_SCENARIOS.TWO_ITEM_PURCHASE.items) {
            await pages.products.addItemToCartByName(item);
        }
        // TODO: Check cart badge count
        await pages.navigationBar.cartIcon.click();
        await pages.navigationBar.proceedToCheckout();
        await pages.cart.waitForCartPageToLoad();
        await expect(page).toHaveURL(pages.cart.url!);
        await pages.cart.checkoutButton.click();
        await pages.checkoutInfo.waitForCheckoutInformationPageToLoad();
        await expect(page).toHaveURL(pages.checkoutInfo.url!);
        await pages.checkoutInfo.fillCheckoutInformation(
            CUSTOMER_INFO.VALID_CUSTOMER.firstName,
            CUSTOMER_INFO.VALID_CUSTOMER.lastName,
            CUSTOMER_INFO.VALID_CUSTOMER.zipCode
        );
        await pages.checkoutOverview.waitForCheckoutOverviewPageToLoad();
        await expect(page).toHaveURL(pages.checkoutOverview.url!);
        // TODO: Verify items in overview
        await pages.checkoutOverview.finishButton.click();
        await pages.checkoutComplete.waitForCheckoutCompletePageToLoad();
        await expect(page).toHaveURL(pages.checkoutComplete.url!);
        //await expect(pages.checkoutComplete.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        await pages.checkoutComplete.backHomeButton.click();
        await pages.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(pages.products.url!);
    });

});
