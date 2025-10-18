import { expect, test } from '@playwright/test';
import { Guru99Page } from '../../pages/guru99/guru99-page';

test.describe('Guru99 Test Suite', () => {
    let guru99: Guru99Page;

    test.beforeEach(async ({ page }) => {
        guru99 = new Guru99Page(page);

        // === Navigate to Guru99 Home Page ===
        await guru99.goto();
        await guru99.waitForGuru99PageToLoad();
        await expect(page).toHaveURL(guru99.url!);
    });

    test('Verify Guru99 Home Page Title - Test Case 1', async ({ page, context }) => {
        // === Click the iframe above the e-mail submission field to open new tab ===
        const newPage = await Promise.all([
            context.waitForEvent('page'), // Wait for new page/tab
            guru99.iFrame.click()         // Action that triggers new tab
        ]).then(([newPage]) => newPage);

        // === Wait for the new page to load ===
        await newPage.waitForLoadState('networkidle');

        // === Verify the new page title contains expected text ===
        await expect(newPage).toHaveTitle('Selenium Live Project for Practice');

        // === Close the new tab and return to original page ===
        await newPage.close();
        await guru99.waitForGuru99PageToLoad();
        await expect(page).toHaveURL(guru99.url!);


    });

});