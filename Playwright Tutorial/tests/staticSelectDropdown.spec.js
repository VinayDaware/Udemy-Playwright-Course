import {expect, test} from '@playwright/test';

test('Static or select dropdown dropdown test',async function({page}){
    // the dropdown which has static values known as ststic or select dropdown

    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);

    const userNameField = page.locator('#username');
    const passField = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const dropDown = page.locator('select.form-control');
    const userRadio = page.locator('span.checkmark').last();
    const alertOkayBtn = page.locator('#okayBtn');

    // selecting the value from dropdown
    await dropDown.selectOption('consult'); // selectOption method is used to select the value from dropDown. Parameter should be value.
    // await page.pause();
    await userRadio.click();
    await alertOkayBtn.click();
    // await page.pause();

    // assertion
    console.log(await userRadio.isChecked());
    await expect(userRadio).toBeChecked();
    




});