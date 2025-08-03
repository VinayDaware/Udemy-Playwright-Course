import { test } from '@playwright/test';

test('Playwright special locators', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/angularpractice/';
    await page.goto(url);
    const nameField = page.locator('[name="name"]');
    await nameField.first().fill('Vinay');

    const emailField = page.locator('[name="email"]');
    await emailField.fill('dawarevinay@gmail.com');

    const passField = page.locator('[type="password"]');
    await passField.fill('Test@1234');

    // getByLabel() is locating methos in playwright testing library selectors it is used to find element usually by the visible label
    const loveIceCreamcheckbox = page.getByLabel('Check me out if you Love IceCreams!'); // here 'Check me out if you Love IceCreams!' is the label name
    await loveIceCreamcheckbox.click();

    const genderDrown = page.getByLabel('Gender');
    await genderDrown.selectOption('Female');

    const employmentStatus = page.getByLabel('Employed');
    await employmentStatus.click();

    const bday = page.locator('[name="bday"]');
    await bday.pressSequentially('26061995');



    // command for running test using playwright interface is ---> npx playwright test fileName --ui






});
