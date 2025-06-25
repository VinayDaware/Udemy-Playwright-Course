import {test,expect} from '@playwright/test';

test('Assertion for checking the radio button is checked or not',async function({page}){
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    await page.goto(url);

    const userNameField = page.locator('#username');
    const passField = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const dropDown = page.locator('select.form-control');
    const userRadio = page.locator('span.checkmark').last();
    const alertOkayBtn = page.locator('#okayBtn');

    await userRadio.click();
    await alertOkayBtn.click();

    // assertion for checking whether the radio button is checked or not. If checked it will return pass else fail
    await expect(userRadio).toBeChecked();

    // to check whether the button is cheked or not. isChecked() method returns the boolean value if the button is cheked it returns true else false
   console.log (await userRadio.isChecked()); // it  rturns check box currectly chekced or not

});

test('Checking whether the terms check box functionality',async function({page}){
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';
    page.goto(url);

    const termsCheckBox = page.locator('#terms');
    await termsCheckBox.click();

    // assertion to check the functionality of termsCheckBox
    await expect(termsCheckBox).toBeChecked();

    // checking whether the checkboc is correctly checked
    const check = await termsCheckBox.isChecked();
    console.log(check);

    // uncheck method to uncheck termsCheckBox
    await termsCheckBox.uncheck();

});