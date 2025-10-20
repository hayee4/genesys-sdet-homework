import { expect, test } from '@playwright/test';
import { SwagLabsPageFactory } from '../../pages/swag-labs/page-factory';
import creds from '../../resources/swag-labs/credentials.json';
import { CUSTOMER_INFO, EXPECTED_MESSAGES, FOOTER_INFO, TEST_SCENARIOS } from '../../resources/swag-labs/test-data';


test.describe('Swag Labs Test Suite', {tag: ['@swag-labs', '@e2e']}, () => {
    let swagLabs: SwagLabsPageFactory;

    test.beforeEach(async ({ page }) => {
        swagLabs = new SwagLabsPageFactory(page);

        // === Navigate to Login Page ===
        await swagLabs.login.goto();
        await swagLabs.login.waitForLoginPageToLoad();
        await expect(page).toHaveURL(swagLabs.login.url!);
    });

    test('Should complete end-to-end purchase flow with two items', async ({ page }) => {
        // === Login with Performance Glitch User ===
        await swagLabs.login.login(creds.users.performance_glitch_user.username, creds.users.performance_glitch_user.password);
        await swagLabs.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(swagLabs.products.url!);

        // === Verify Cart Badge Count Before Adding Items ===
        let cartBadgeCount;
        cartBadgeCount = await swagLabs.navigationBar.getCartBadgeCount();
        expect(cartBadgeCount).toBe(0);

        // === Add Items to Cart ===
        for (const item of TEST_SCENARIOS.TWO_ITEM_PURCHASE.items) {
            await swagLabs.products.addItemToCartByName(item);
        }

        // === Verify Cart Badge Count After Adding Items ===
        const expectedItemCount = TEST_SCENARIOS.TWO_ITEM_PURCHASE.items.length;
        cartBadgeCount = await swagLabs.navigationBar.getCartBadgeCount();
        expect(cartBadgeCount).toBe(expectedItemCount);

        // === Proceed to Checkout ===
        await swagLabs.navigationBar.cartIcon.click();
        await swagLabs.navigationBar.proceedToCheckout();
        await swagLabs.cart.waitForCartPageToLoad();
        await expect(page).toHaveURL(swagLabs.cart.url!);

        // === Checkout Process ===
        await swagLabs.cart.checkoutButton.click();
        await swagLabs.checkoutInfo.waitForCheckoutInformationPageToLoad();
        await expect(page).toHaveURL(swagLabs.checkoutInfo.url!);

        // === Fill Checkout Information ===
        await swagLabs.checkoutInfo.fillCheckoutInformation(
            CUSTOMER_INFO.VALID_CUSTOMER.firstName,
            CUSTOMER_INFO.VALID_CUSTOMER.lastName,
            CUSTOMER_INFO.VALID_CUSTOMER.zipCode
        );
        await swagLabs.checkoutOverview.waitForCheckoutOverviewPageToLoad();
        await expect(page).toHaveURL(swagLabs.checkoutOverview.url!);

        // === Verify Items in Overview and Complete Purchase ===
        for (const expectedItem of TEST_SCENARIOS.TWO_ITEM_PURCHASE.items) {
            await expect(await swagLabs.checkoutOverview.getItemByName(expectedItem)).toBeVisible();
        }
        await swagLabs.checkoutOverview.finishButton.click();
        await swagLabs.checkoutComplete.waitForCheckoutCompletePageToLoad();
        await expect(page).toHaveURL(swagLabs.checkoutComplete.url!);
        await expect(swagLabs.checkoutComplete.completeHeader).toHaveText(EXPECTED_MESSAGES.ORDER_SUCCESS.header);
        await expect(swagLabs.checkoutComplete.completeText).toContainText(EXPECTED_MESSAGES.ORDER_SUCCESS.confirmation);

        // === Return to Products Page ===
        await swagLabs.checkoutComplete.backHomeButton.click();
        await swagLabs.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(swagLabs.products.url!);
    });

    test('Should validate login error messages and footer information', async ({ page }) => {
        // === Try to login without credentials ===
        await swagLabs.login.login();

        // === Verify error message is displayed ===
        await swagLabs.login.waitForErrorMessageToBeVisible();
        await expect(swagLabs.login.errorMessage).toHaveText(EXPECTED_MESSAGES.ERROR_MESSAGES.MISSING_CREDENTIALS);

        // === Login with Standard User ===
        await swagLabs.login.login(creds.users.standard_user.username, creds.users.standard_user.password);
        await swagLabs.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(swagLabs.products.url!);

        // === Scroll down to bottom of the page ===
        await page.locator('.footer').scrollIntoViewIfNeeded();

        // === Validate the footer message ===
        await expect(swagLabs.footer.footerText).toContainText(FOOTER_INFO.YEAR);
        await expect(swagLabs.footer.footerText).toContainText(FOOTER_INFO.TERMS_OF_SERVICE);
    });
});