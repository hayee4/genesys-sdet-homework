import { expect, test } from '@playwright/test';
import { SwagLabsPageFactory } from '../../pages/page-factory';
import creds from '../../resources/swag-labs/credential_performance_glitch_user.json';
import { CUSTOMER_INFO, TEST_SCENARIOS, EXPECTED_MESSAGES } from '../../resources/swag-labs/test-data';


test.describe('Swag Labs Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        const pages = new SwagLabsPageFactory(page);

        // === Navigate to Login Page ===
        await pages.login.goto();
        await pages.login.waitForLoginPageToLoad();
        await expect(page).toHaveURL(pages.login.url!);
    });

    test('Automate Purchase Process - Test Case 1', async ({ page }) => {
        const pages = new SwagLabsPageFactory(page);

        // === Login Step ===
        await pages.login.login(creds.username, creds.password);
        await pages.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(pages.products.url!);

        // === Add Items to Cart ===
        for (const item of TEST_SCENARIOS.TWO_ITEM_PURCHASE.items) {
            await pages.products.addItemToCartByName(item);
        }

        // === Verify Cart Badge Count ===
        const expectedItemCount = TEST_SCENARIOS.TWO_ITEM_PURCHASE.items.length;
        const cartBadgeCount = await pages.navigationBar.getCartBadgeCount();
        expect(cartBadgeCount).toBe(expectedItemCount);

        // === Proceed to Checkout ===
        await pages.navigationBar.cartIcon.click();
        await pages.navigationBar.proceedToCheckout();
        await pages.cart.waitForCartPageToLoad();
        await expect(page).toHaveURL(pages.cart.url!);

        // === Checkout Process ===
        await pages.cart.checkoutButton.click();
        await pages.checkoutInfo.waitForCheckoutInformationPageToLoad();
        await expect(page).toHaveURL(pages.checkoutInfo.url!);

        // === Fill Checkout Information ===
        await pages.checkoutInfo.fillCheckoutInformation(
            CUSTOMER_INFO.VALID_CUSTOMER.firstName,
            CUSTOMER_INFO.VALID_CUSTOMER.lastName,
            CUSTOMER_INFO.VALID_CUSTOMER.zipCode
        );
        await pages.checkoutOverview.waitForCheckoutOverviewPageToLoad();
        await expect(page).toHaveURL(pages.checkoutOverview.url!);

        // === Verify Items in Overview and Complete Purchase ===
        for (const expectedItem of TEST_SCENARIOS.TWO_ITEM_PURCHASE.items) {
            await expect(await pages.checkoutOverview.getItemByName(expectedItem)).toBeVisible();
        }
        await pages.checkoutOverview.finishButton.click();
        await pages.checkoutComplete.waitForCheckoutCompletePageToLoad();
        await expect(page).toHaveURL(pages.checkoutComplete.url!);
        await expect(pages.checkoutComplete.completeHeader).toHaveText(EXPECTED_MESSAGES.ORDER_SUCCESS.header);
        await expect(pages.checkoutComplete.completeText).toContainText(EXPECTED_MESSAGES.ORDER_SUCCESS.confirmation);

        // === Return to Products Page ===
        await pages.checkoutComplete.backHomeButton.click();
        await pages.products.waitForProductsPageToLoad();
        await expect(page).toHaveURL(pages.products.url!);
    });
});
