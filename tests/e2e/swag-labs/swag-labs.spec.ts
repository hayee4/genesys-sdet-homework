import { expect, test } from '@playwright/test';
import { SwagLabsLoginPage } from '../../pages/swag-labs/SwagLabsLoginPage';
import { SwagLabsProductsPage } from '../../pages/swag-labs/SwagLabsProductsPage';

test.describe('Swag Labs Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new SwagLabsLoginPage(page);
        await loginPage.goto();
        await expect(loginPage.header).toBeVisible();
    });

    // Test Case 1: Automate Purchase Process
    test('Automate Purchase Process - Test Case 1', async ({ page }) => {
        const loginPage = new SwagLabsLoginPage(page);
        const productsPage = new SwagLabsProductsPage(page);
        await loginPage.loginWithPerformanceGlitchUser();
        await expect(productsPage.productsTitle).toBeVisible();
        const items = [
            "Sauce Labs Backpack",
            "Sauce Labs Fleece Jacket"
        ];
        let count = 0;
        for (const item of items) {
            await productsPage.addItemToCartByName(item);
            await productsPage.checkCartBadgeByCount(++count);
        }   
    });
});
