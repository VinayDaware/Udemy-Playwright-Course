import { expect, test } from '@playwright/test';

test('Login using valid credentials', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);
    await page.locator('input#username').fill('rahulshettyacademy ');
    await page.locator('[type="password"]').fill('learning');
    await page.locator('[id*="sign"]').click();

});

test('Validating message after failed login', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);
    await page.locator('[name = "username"]').fill('rahulshettyacademy');
    await page.locator('[name = "password"]').fill('learning');
    await page.locator('[type="submit"]').click();

    const errorLocator = await page.locator('[style*="block"]');
    const actualErrorMessage = await errorLocator.textContent();
    const expectedErrorMessage = 'Incorrect username/password.';

    // partial text contain validation e.g. validating Incorrect word is present
    //.toContainText() method is use for validating partial text

    await expect(errorLocator).toContainText("Incorrect");

    // Validating exact text is match or not
    await expect(errorLocator).toHaveText(expectedErrorMessage);

    console.log(`Validation is done and Actual error message is ${actualErrorMessage}`);

});