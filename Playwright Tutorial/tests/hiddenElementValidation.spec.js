import { expect, test } from '@playwright/test';

test('', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(url);

    const textBox = page.locator('#displayed-text');

    // .toBeVisible() checks the element is visible on the web page or not. Its an assertion
    await expect(textBox).toBeVisible();

    const hideButton = page.locator('#hide-textbox');
    await hideButton.click();

    // .toBeHiddent() checks the element is not visible on the page. Its an assertion
    await expect(textBox).toBeHidden();




});