import { expect, test } from '@playwright/test';
import { OnlineHtmlEditorPage } from '../../pages/online-html-editor/editor-page';
import { EXPECTED_HTML, TEST_TEXT } from '../../resources/online-html-editor/test-data';

test.describe('Online HTML Editor Test Suite', { tag: ['@online-html-editor', '@e2e'] }, () => {
    let editorPage: OnlineHtmlEditorPage;

    test.beforeEach(async ({ page }) => {
        editorPage = new OnlineHtmlEditorPage(page);

        // === Navigate to Online HTML Editor ===
        await editorPage.goto();
        await editorPage.waitForEditorToLoad();
        await expect(page).toHaveURL(editorPage.url!);
    });

    test('Should format text correctly with bold, underline, and plain formatting', async ({}) => {
        // === Type 'Automation' with bold formatting ===
        await editorPage.setFormatToBold();
        await editorPage.typeTextInEditor(TEST_TEXT.BOLD);
        await editorPage.resetFormat();

        // === Add space between words ===
        await editorPage.typeTextInEditor(TEST_TEXT.SPACE);

        // === Type 'Test' with underlined formatting ===
        await editorPage.setFormatToUnderlined();
        await editorPage.typeTextInEditor(TEST_TEXT.UNDERLINED);
        await editorPage.resetFormat();

        // === Add space between words ===
        await editorPage.typeTextInEditor(TEST_TEXT.SPACE);

        // === Type 'Example' without any formatting ===
        await editorPage.typeTextInEditor(TEST_TEXT.PLAIN);

        // === Verify text content contains all expected words ===
        const actualTextContent = await editorPage.editorFrame.textContent();

        expect(actualTextContent).toContain(TEST_TEXT.BOLD);
        expect(actualTextContent).toContain(TEST_TEXT.UNDERLINED);
        expect(actualTextContent).toContain(TEST_TEXT.PLAIN);

        // === Verify HTML formatting is applied correctly ===
        const editorContent = await editorPage.editorFrame.innerHTML();

        expect(editorContent).toContain(EXPECTED_HTML.BOLD_TAG);
        expect(editorContent).toContain(EXPECTED_HTML.UNDERLINED_TAG);
        expect(editorContent).toContain(EXPECTED_HTML.PLAIN_TEXT);
    });
});
