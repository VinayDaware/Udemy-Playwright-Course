import { test, request } from '@playwright/test';
import { APIUtils } from '../utils/APIUtils';

// route() method interecepts a network call before reaching to the server
const loginPayload = { userEmail: 'vinaydaware@gmail.com', userPassword: 'Test@1234' };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let response;
const fakePayLoadOrders = { data: [], message: "No Orders" };

test.beforeAll(async function () {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);
});

test('Intercepting network response calls with route method', async function ({ page }) {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.authToken);

    // Step 1: Navigate to url
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*', async route => {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakePayLoadOrders); // converting JS to JSON bcz fulfill() expecting JSON
        route.fulfill(
            {
                response,
                body,
            }
        )
        // intercepting response - API response -> {plawright fake response} -->browser-->render data on front end

    });
    // Step 2: NAvigating to order history page
    const myOrderBtn = page.locator('button[routerlink*="myorders"]');
    await myOrderBtn.click();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*');
    const noOrdrsMsg = await page.locator('.mt-4').textContent();
    console.log(noOrdrsMsg);

});