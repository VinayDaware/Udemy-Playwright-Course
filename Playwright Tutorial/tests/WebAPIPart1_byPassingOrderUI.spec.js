import { test, request, expect } from '@playwright/test';

//global variables so we can use in all test or functions
const loginPayload = { userEmail: "vinaydaware@gmail.com", userPassword: "Test@1234" };
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let authToken;
let orderID;

//beforeAll ---> executes before all the tests

test.beforeAll(async function () {

    // request.newContext() creates a new API session
    const apiContext = await request.newContext();

    // this sends a POST request to login URL with login payload
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayload });

    //Assertion in playwright it returns true is loginResponse.ok() returns status code from 200-299
    expect(loginResponse.ok()).toBeTruthy();

    // parse the response body into JSON
    const loginResponseJson = await loginResponse.json();

    //extract token from response body
    authToken = loginResponseJson.token;
    const userID = loginResponseJson.userId;
    const loginMessage = loginResponseJson.message;

    console.log('The auth token is : ' + authToken);
    console.log('User ID of user is :' + userID);

    if (loginMessage == 'Login Successfully') {
        console.log(loginMessage);
    } else {
        console.log('Login failed')
    };

    // Calling create order API
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers: {
                'Authorization': authToken,
                'Content-Type': 'application/json'
            }
        });
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderID = orderResponseJson.orders[0];

});

test('API integration for web testing tutorial', async function ({ page }) {

    // insering auth token to browser local storage of application
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, authToken);

    // Step 1: Navigate to url
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    // Step 2: Navigating to order history page
    const orderBtn = page.locator('button[routerlink*="myorders"]');
    await orderBtn.click();
    await page.locator('tbody').waitFor();
    const orderRows = page.locator('tbody tr');
    const rowsCount = await orderRows.count();
    for (let i = 0; i < rowsCount; i++) {
        const actualOrderID = await orderRows.nth(i).locator('th').textContent();
        if (orderID.includes(actualOrderID)) {
            const viewBtn = orderRows.nth(i).locator('td button.btn-primary');
            await viewBtn.click();
            break;
        }

    }
    const orderIDDetails = await page.locator('.col-text').textContent();
    expect(orderID.includes(orderIDDetails)).toBeTruthy();

});