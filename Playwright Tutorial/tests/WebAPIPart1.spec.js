import { test, request, expect } from '@playwright/test';

//global variables so we can use in all test or functions
const loginPayload = { userEmail: "vinaydaware@gmail.com", userPassword: "Test@1234" };
let authToken;

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

});

test('API integration for web testing tutorial', async function ({ page }) {

    // insering auth token to browser local storage of application
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, authToken);
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);
    // write complete test like handlingAutodropdown.spec.js file take reference do not copy

});