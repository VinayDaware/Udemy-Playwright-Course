import {test,expect} from '@playwright/test';

test('Handling child windows & tabs with playwright using browser context', async function({page})
{
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    page.goto(url);
    const userNameField = page.locator('#username');
    const passField = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const dropDown = page.locator('select.form-control');
    const userRadio = page.locator('span.checkmark').last();
    const alertOkayBtn = page.locator('#okayBtn');
    const termsCheckBox = page.locator('#terms');
    await termsCheckBox.click();

    // selecting the value from dropdown
    await dropDown.selectOption('consult'); // selectOption method is used to select the value from dropDown. Parameter should be value.
    // await page.pause();

    // selecting a radio button
    await userRadio.click();
    await alertOkayBtn.click();
    // await page.pause();

    // assertion
    console.log(await userRadio.isChecked());
    await expect(userRadio).toBeChecked();
    

    // terminal command ---- > npx playwright test fileName --debug

});