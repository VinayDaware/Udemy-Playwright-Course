const {test, expect} = require ('@playwright/test');

test('Launching gmail website and validationg page title',async function({page})

{
    const url = 'https://rahulshettyacademy.com/loginpagePractise/';

    await page.goto(url);

    // get title of the page title() method is used to get page titile
    const pageTitle = await page.title();
    console.log(`The pahe title is ${pageTitle}`);

    // validating page title using assertion
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

   // locators supported by playwright 1. css and highly reccomended
   await page.locator('[name = "username"]').fill("vishal");
   await page.locator('#password').fill("Abc@123");
   await page.locator('[type = "submit"]').click();




});