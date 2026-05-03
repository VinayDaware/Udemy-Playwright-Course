import { test, request, expect } from '@playwright/test';
import { APIUtils } from '../utils/APIUtils';
const loginPayload = { userEmail: "vinaydaware@gmail.com", userPassword: "Test@1234" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let response;

test.beforeAll(async function () {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});

test('Create an order using utils file methods', async function ({ page }) {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.authToken);

    // Step 1: Navigate to url
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    // Step2 : Navigating to order history page
    const myOrdersButton = page.locator('button[routerlink*="myorders"]');
    await myOrdersButton.click();
    await page.locator('tbody').waitFor();
    const ordersRow = page.locator('tbody tr');
    const rowsCount = await ordersRow.count();
    for (let i = 0; i < rowsCount; i++) {
        const actualOrderId = await ordersRow.nth(i).locator('th').textContent();
        if (response.orderID.includes(actualOrderId)) {
            const viewButton = ordersRow.nth(i).locator('td button.btn-primary');
            await viewButton.click();
            break;
        }
    }
    const orderDetails = await page.locator('.col-text').textContent();
    await page.pause();
    expect(response.orderID.includes(orderDetails)).toBeTruthy();

})