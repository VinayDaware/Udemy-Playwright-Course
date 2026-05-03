import { test, expect } from '@playwright/test';

test('Taking screenshot of complete page and selected element', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    const emailInput = page.locator('#userEmail');
    const passwordInput = page.locator('#userPassword');
    const loginButton = page.locator('[type="submit"]');

    const email = 'vinaydaware@gmail.com';
    const password = 'Test@1234';
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await loginButton.click();

    await page.waitForLoadState('networkidle');
    const productName = 'ADIDAS ORIGINAL';
    const products = page.locator('div.card-body');
    const productsCount = await products.count();
    console.log(productsCount);
    const productTitles = await page.locator('div.card-body b').allTextContents();
    for (let i = 0; i < productsCount; i++) {
        // iterating over the list of products
        const product = await products.nth(i).locator('b').textContent();

        if (product == productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    // go to cart
    await page.waitForLoadState('networkidle');
    const cart = page.locator('[routerlink="/dashboard/cart"]');

    // taking screenshot of selected element
    await cart.screenshot({ path: 'G:/PlayWright/Playwright Tutorial/screenshots/partialScreenshot.png' });
    await cart.click();

    // asertion for checking correct item added to car
    await page.locator('div li').first().waitFor();

    // we use wait here because isVisible method does not support auto wait mechanism
    const checkProduct = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();

    // capturing screenshot using screenshot method --> screenshot method is used to capture screenshot
    await page.screenshot({ path: 'G:/PlayWright/Playwright Tutorial/screenshots/screenshot.png' });
});