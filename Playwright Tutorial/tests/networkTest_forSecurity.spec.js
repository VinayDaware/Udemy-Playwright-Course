// Accessing order ID which is not belongs to current logged in user
import { test, expect } from '@playwright/test';
test('Accessing order ID which is not belongs to user by intercepting request call', async function ({ page }) {
    //login and reach out to order page
    await page.route('**/*.css', route => route.abort());
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);
    const userEmail = page.locator('#userEmail');
    const userPass = page.locator('#userPassword');
    const loginBtn = page.locator('[type="submit"]');
    const email = 'vinaydaware@gmail.com';
    const password = 'Test@1234';

    await userEmail.fill(email);
    await userPass.fill(password);
    await loginBtn.click();

    // printing response and request in output --> on method acts as an listener and prints all events on page
    page.on('request', request => console.log(request.url()));
    page.on('response', response => console.log(response.url(), response.status()));

    const myOrderBtn = page.locator('button[routerlink*="myorders"]');
    await myOrderBtn.click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*", route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69b7d77af86ba51a6508baf8' }));

    const viewBtn = page.locator("button:has-text('View')");
    await viewBtn.first().click();
    const errorMessageLocator = page.locator('.blink_me');
    const errorMessageText = await errorMessageLocator.textContent();
    console.log(errorMessageText);
    await expect(errorMessageLocator).toHaveText('You are not authorize to view this order');

});