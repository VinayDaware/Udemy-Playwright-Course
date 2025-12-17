import { test,request,expect } from '@playwright/test';

const loginPayload = { userEmail: "vinaydaware@gmail.com", userPassword: "Test@1234" };
let authToken;
let orderID;
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "68a961719320a140fe1ca57c"}]};
test.beforeAll(async function () {
// Login API
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
    const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
    data : orderPayload,
    headers:{
        'Authorization' : authToken,
        'Content-Type' : 'application/json'
    },
})
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson);
orderID = await orderResponseJson.orders[0];

});

test('Place order using API', async function ({ page }) {
    await page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    },authToken);

    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);
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
    await page.pause();
    expect(orderID.includes(orderIDDetails)).toBeTruthy();

})