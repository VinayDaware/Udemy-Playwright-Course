import { expect, test } from '@playwright/test';
test('visual testing using playwright', async function ({ page }) {
    const url = 'https://www.google.com/';
    await page.goto(url);
    expect(await page.screenshot()).toMatchSnapshot('screenshot.png');
});