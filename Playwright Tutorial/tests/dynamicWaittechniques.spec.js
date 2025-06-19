import {test} from '@playwright/test';

test ('Getting product list from ',async function({page}) {
    const url = 'https://rahulshettyacademy.com/client/auth/login';
    await page.goto(url);
    const emailField = await page.locator('#userEmail');
    const passField = await page.locator("[type = 'password']");
    const loginBtn = await page.locator("[value='Login']");

    await emailField.fill("anshika@gmail.com");
    await passField.fill("Iamking@000");
    await loginBtn.click();

    // wait untill all load state is successfull for network call
    await page.waitForLoadState('networkidle');



    


})