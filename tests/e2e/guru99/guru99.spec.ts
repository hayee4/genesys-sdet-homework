import { expect, test } from '@playwright/test';
import { Guru99MainPage } from '../../pages/guru99/guru99-page';
import { SeleniumTutorialPage } from '../../pages/guru99/selenium-tutorial';
import { GURU99_TEST_DATA } from '../../resources/guru99/test-data';

test.describe('Guru99 Test Suite', { tag: ['@guru99', '@e2e'] }, () => {
    let mainPage: Guru99MainPage;
    let seleniumPage: SeleniumTutorialPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new Guru99MainPage(page);
        seleniumPage = new SeleniumTutorialPage(page);

        // === Navigate to Guru99 Home Page ===
        await mainPage.goto();
        await mainPage.waitForGuru99PageToLoad();
        await expect(page).toHaveURL(mainPage.getUrl()!);
    });

    test('Should click iframe to open new tab and navigate to Selenium tutorial', async ({ page, context }) => {
        // === Click the iframe above the e-mail submission field to open new tab ===
        const [newPage] = await Promise.all([context.waitForEvent('page', { timeout: 60000 }), mainPage.clickIframe()]);

        // === Verify the new page title contains expected text ===
        await expect(newPage).toHaveTitle(GURU99_TEST_DATA.EXPECTED_TITLES.SELENIUM_LIVE_PROJECT);

        // === Close the new tab and return to original page ===
        await newPage.close();
        await mainPage.waitForGuru99PageToLoad();
        await expect(page).toHaveURL(mainPage.getUrl()!);

        // === Find Selenium in Testing menu ===
        await mainPage.hoverOverTestingMenuItem();
        await mainPage.clickSeleniumSubMenuItem();
        await seleniumPage.waitForSeleniumTutorialPageToLoad();

        // === Verify Submit Button is visible ===
        expect(await seleniumPage.isSubmitButtonVisible()).toBe(true);
    });
});
