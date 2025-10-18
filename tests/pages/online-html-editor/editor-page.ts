import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class OnlineHtmlEditorPage extends BasePage {

    readonly editorFrame: Locator;
    readonly boldButton: Locator;
    readonly underlineButton: Locator;
    readonly removeFormatButton: Locator;

    constructor(page: Page) {
        super(page, 'https://onlinehtmleditor.dev');
        this.editorFrame = page.locator('.ck-editor__editable[role="textbox"]');
        this.boldButton = page.getByRole('button', { name: 'Bold' });
        this.underlineButton = page.getByRole('button', { name: 'Underline' });
        this.removeFormatButton = page.getByRole('button', { name: 'Remove Format' });
    }

    async waitForEditorToLoad(): Promise<void> {
        await this.waitForElementVisible(this.editorFrame);
    }

    async typeTextInEditor(text: string): Promise<void> {
        await this.editorFrame.pressSequentially(text);
    }

    async setFormatToBold(): Promise<void> {
        await this.boldButton.click();
    }

    async setFormatToUnderlined(): Promise<void> {
        await this.underlineButton.click();
    }

    async resetFormat(): Promise<void> {
        await this.removeFormatButton.click();
    }
}