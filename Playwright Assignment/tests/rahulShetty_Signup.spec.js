import { test, expect } from '@playwright/test';

test('Validationg registration page url', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/client/';
    const registrationUrl = 'https://rahulshettyacademy.com/client/auth/register';
    const registerBtn = await page.locator('.login-wrapper-footer-text');
    await page.goto(url);
    await registerBtn.click();
    const currentUrl = await page.url();
    console.log(`The current url is - ${currentUrl}`);
    await expect(page).toHaveURL(registrationUrl);

});

test.only('Registration with valid details', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/client/';
    const registerBtn = await page.locator('.login-wrapper-footer-text');
    await page.goto(url);
    await registerBtn.click();

    const firstName = await page.locator('#firstName');
    const lastName = await page.locator('[type="lastName"]');
    const email = await page.locator('#userEmail');
    const phone = await page.locator('#userMobile');
    const maleGender = await page.locator('[value="Male"]');
    const userPassword = await page.locator('#userPassword');
    const confirmPassword = await page.locator('#confirmPassword');
    const ageConfirCheckBox = await page.locator('[type="checkbox"]');
    const registrationBtn = await page.locator('#login');

    await firstName.fill('Vinay');
    await lastName.fill('Daware');
    await email.fill('dawarevinay@gmail.com');
    await phone.fill('8554043679');
    await maleGender.click();
    await userPassword.fill('Test@1234');
    await confirmPassword.fill('Test@1234');
    await ageConfirCheckBox.check();
    await registrationBtn.click();

});