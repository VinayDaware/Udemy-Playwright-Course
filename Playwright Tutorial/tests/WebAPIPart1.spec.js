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

    // Step 1: Navigate to url
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    // Step 2: Wait for full load
    await page.waitForLoadState('networkidle');
    // Step 3: Define product name
    const productName = 'iphone 13 pro';
    // Step 4: Capture product elements
    const products = page.locator('div.card-body');
    const productsCount = await products.count();
    // Step 5: Print all product titles
    // extracted all text from b tag and saved to the array(product titles)
    const procutsTitle = await page.locator('div.card-body b').allTextContents();
    console.log(procutsTitle);
    // Step 6: Loop through each product
    // for loop starts from 0 to product count, i is current products index

    // for loop explaination at bottom
    for (let i = 0; i < productsCount; i++) {
        const product = await products.nth(i).locator('b').textContent();
        console.log(product);

        if (productName == product) {
            await products.nth(i).locator('button.btn.w-10').click();
            break;
        } else {
            console.log(`Product "${productName}" not found`)
        }


    }
    // for loop explaination
    //products.nth(i) → i - th selects product card. 
    // .locator('b') → selects product card's< b > element(product title). 
    // .textContent() → extracts text from that selected card (as string).

    // if loop inside for loop
    // checks the productName == products if match found clicks on the Add to Cart
    // break breaks the loop as match found and avoids unneccesary iteration


    await page.waitForLoadState('networkidle');
    const cart = await page.locator("[routerlink = '/dashboard/cart']").click();
    await page.locator('div li').first().waitFor();
    const checkProduct = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(checkProduct).toBeTruthy();

    const checkOutBtn = page.locator('button.btn.btn-primary').last();
    await checkOutBtn.click();

    const CrediCardNumber = '4542 9931 9292 2296'
    const cvv = '123';
    const nameOnCard = 'Kajal Vinay Daware';
    const cardNumberField = page.locator('input.input.txt.text-validated').first();
    await cardNumberField.fill(CrediCardNumber);
    const monthDrodown = page.locator('select.input.ddl').first();
    await monthDrodown.selectOption('09');
    const yearDrodown = page.locator('select.input.ddl').last();
    await yearDrodown.selectOption('29');
    const cvvField = page.locator("input[class='input txt']").first();
    await cvvField.fill(cvv);
    const nameOnCardField = page.locator("input[class='input txt']").last();
    await nameOnCardField.fill(nameOnCard);

    const countryBox = page.locator('[placeholder*="Country"]');
    await countryBox.pressSequentially('Ind', { delay: 100 });
    const countryResult = page.locator('.ta-results');
    await countryResult.waitFor();
    const macthingCountryCount = await countryResult.locator('button').count();

    for (let i = 0; i < macthingCountryCount; i++) {
        const countryName = await countryResult.locator('button').nth(i).textContent();
        if (countryName === ' India') {
            await countryResult.locator('button').nth(i).click();
            break;
        }
    }
    const placeOrderBtn = page.locator('.btnn.action__submit');
    await placeOrderBtn.click();

    // checking order confirmation
    const orderConfirmationMsg = page.locator('.hero-primary');
    const expected_orderConfirmationMsg = ' Thankyou for the order. ';
    await expect(orderConfirmationMsg).toHaveText(expected_orderConfirmationMsg);

    // grabing order ID
    const orderID = await page.locator('label.ng-star-inserted').textContent();
    console.log(`You have successfully order ${productName} and your order ID is ${orderID}🎉🙌🙌`);


    //navigating to order history page
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