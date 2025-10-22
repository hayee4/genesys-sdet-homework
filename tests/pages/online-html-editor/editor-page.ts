import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class OnlineHtmlEditorPage extends BasePage {
    private readonly editorFrame: Locator;
    private readonly boldButton: Locator;
    private readonly underlineButton: Locator;
    private readonly removeFormatButton: Locator;

    constructor(page: Page) {
        super(page, 'https://onlinehtmleditor.dev');
        this.editorFrame = this.page.locator('.ck-editor__editable[role="textbox"]');
        this.boldButton = this.page.getByRole('button', { name: 'Bold' });
        this.underlineButton = this.page.getByRole('button', { name: 'Underline' });
        this.removeFormatButton = this.page.getByRole('button', { name: 'Remove Format' });
    }

    public async getEditorFrameText() {
        return this.editorFrame.textContent();
    }

    public async getEditorFrameInnerHTML() {
        return this.editorFrame.innerHTML();
    }

    public async waitForEditorToLoad() {
        await this.waitForElementVisible(this.editorFrame);
    }

    public async typeTextInEditor(text: string) {
        await this.editorFrame.pressSequentially(text);
    }

    public async setFormatToBold() {
        await this.boldButton.click();
    }

    public async setFormatToUnderlined() {
        await this.underlineButton.click();
    }

    public async resetFormat() {
        await this.removeFormatButton.click();
    }
}
