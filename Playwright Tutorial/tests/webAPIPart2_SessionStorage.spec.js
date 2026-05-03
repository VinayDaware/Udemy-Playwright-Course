// topic - how to save session storage into browser context 

import { test, expect } from '@playwright/test';
const email = 'vinaydaware@gmail.com';
const password = 'Test@1234';
const baseUrl = 'https://rahulshettyacademy.com/client/#/auth/login';
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(baseUrl);
    const emailField = page.getByPlaceholder('email@example.com');
    const passwordField = page.getByPlaceholder('enter your passsword');
    const loginButton = page.getByRole('button', { name: 'login' });
    await emailField.fill(email);
    await passwordField.fill(password);
    await loginButton.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    //injecting storage state cookies into new browser context
    webContext = await browser.newContext({ storageState: 'state.json' });

});

test('client app login and order booking 1', async function () {
    const page = await webContext.newPage();
    await page.goto(baseUrl);
    await page.locator('.card-body b').first().waitFor();
    const productTitles = await page.locator('.card-body b').allTextContents();
    console.log(productTitles);

    const productName = 'ADIDAS ORIGINAL';
    const product = page.locator('.card-body').filter({ hasText: productName });
    await product.getByRole('button', { name: 'Add To Cart' }).click();

    const cartButton = page.getByRole('listitem').getByRole('button', { name: 'cart' });
    await cartButton.click();

    await page.locator('div li').first().waitFor();
    await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();

    const checkOutButton = page.getByRole('button', { name: 'Checkout' });
    await checkOutButton.click();

    const selectCountry = page.getByPlaceholder('Select Country');
    await selectCountry.pressSequentially('Ind');
    await page.getByRole('button', { name: 'India' }).nth(1).click();

    const placeORderButton = page.getByText('PLACE ORDER');
    await placeORderButton.click();

    const orderConfirmationMessage = page.getByText(' Thankyou for the order. ');
    console.log(orderConfirmationMessage);
    await expect(orderConfirmationMessage).toBeVisible();

    // Navigating to order history page
    const ordersButton = page.getByRole('listitem').getByRole('button', { name: 'ORDERS' });
    await ordersButton.click();
    const expectedOrdersPageUrl = 'https://rahulshettyacademy.com/client/#/dashboard/myorders';
    await page.getByText('Your Orders').waitFor();
    const actualOrdersPageUrl = await page.url();
    console.log(actualOrdersPageUrl);
    await expect(page).toHaveURL(expectedOrdersPageUrl);

});

test('client app login and printing an product titles 2', async function () {
    const page = await webContext.newPage();
    await page.goto(baseUrl);

    await page.locator('.card-body b').first().waitFor();
    const productTitles = await page.locator('.card-body b').allTextContents();
    console.log(productTitles);
})