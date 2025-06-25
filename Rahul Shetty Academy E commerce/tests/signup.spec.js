import {expect, test} from '@playwright/test';

test('Client app signup', async function ({page}){
    const url = 'https://rahulshettyacademy.com/client/';
    page.goto(url);
    const registerBtn = page.locator('p.login-wrapper-footer-text');
    await registerBtn.click()

    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const emailField = page.locator('#userEmail');
    const phoneNumber = page.locator('#userMobile');
    const dropDown = page.locator('[class*="custom-select"]');
    const genderMale = page.locator('[value="Male"]');
    const userPass = page.locator('#userPassword');
    const confirmPass = page.locator('#confirmPassword');
    const ageConfirm = page.locator('[type = "checkbox"]');
    const signupBtn = page.locator('[value="Register"]');

    await firstName.fill('Vinay');
    await lastName.fill('Daware');
    await emailField.fill('vinaydaware11@gmail.com');
    await phoneNumber.fill('8413129248');
    await dropDown.selectOption('3: Engineer');
    await genderMale.click();
    await userPass.fill('Test@1234');
    await confirmPass.fill('Test@1234')
    await ageConfirm.click();
    await signupBtn.click();

    const successMsg = await page.locator('h1.headcolor').textContent();
    // console.log(successMsg);
    await expect(successMsg).toContaintext('Account Created Successfully')
    // await page.pause();

});  