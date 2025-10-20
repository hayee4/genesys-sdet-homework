export const TEST_TEXT = {
    BOLD: 'Automation',
    UNDERLINED: 'Test',
    PLAIN: 'Example',
    SPACE: ' ',
};

export const EXPECTED_HTML = {
    BOLD_TAG: `<strong>${TEST_TEXT.BOLD}</strong>`,
    UNDERLINED_TAG: `<u>${TEST_TEXT.UNDERLINED}</u>`,
    PLAIN_TEXT: `${TEST_TEXT.PLAIN}`,
};
