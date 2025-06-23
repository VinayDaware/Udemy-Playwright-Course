import {test} from '@playwright/test';

test ('Getting product list from home page after successfull login ',async function({page}) {
    const url = 'https://rahulshettyacademy.com/client';
    await page.goto(url);

    // waiting for dom content loading
    // await page.waitForLoadState('domcontentloaded'); // here the it will wait for dom contenet loading is complete
        
    const emailField = await page.locator("[type='email']");
    const passField = await page.locator("[type = 'password']");
    const loginBtn = await page.locator("[value='Login']");

    await emailField.fill("anshika@gmail.com");
    await passField.fill("Iamking@000");
    await loginBtn.click();

    // wait untill all load state is successfull for network call
    // here we used networkidle ---> it waits for network is idle state.
    await page.waitForLoadState('networkidle'); // networkidle is some times freaky so use wait for method instead of using networkidle

    // getting product list after login
    const homePageProducts = '.card-body b';  // here card-body is a class and b is a tag inside the card body
  
    //wait for method -- > it only works if the selector return only element or single element.Not working for multiple element So we can set wait for first or last method
    
    await page.locator(homePageProducts).first().waitFor();

    const homePageProductsName = "[style*='text-transform:']";
    const homeProductTitles = await page.locator(homePageProductsName).allTextContents();
    console.log(homeProductTitles);

})