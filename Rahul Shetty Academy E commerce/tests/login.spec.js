import {test,expect} from '@playwright/test';
test('Login with valid credentials,adding item to cart and validating item in cart and checkout',async function({page}){
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    const userEmail = page.locator('#userEmail');
    const userPass = page.locator('#userPassword');
    const loginBtn = page.locator('[type="submit"]');

    await userEmail.fill('vinaydaware@gmail.com');
    await userPass.fill('Test@1234');
    await loginBtn.click();


    await page.waitForLoadState('networkidle');
    const productName = 'ADIDAS ORIGINAL';
    const products = page.locator('div.card-body');
    const productsCount = await products.count();
    console.log(productsCount);
    const productTitles = await page.locator('div.card-body b').allTextContents();

    for (let i =0;i<productsCount;i++){
        // iterating over the list of products
        const product = await products.nth(i).locator('b').textContent();

        if(product==productName){
            // add to cart 
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }

    }

    // go to cart
    await page.waitForLoadState('networkidle');
    const cart = page.locator('[routerlink="/dashboard/cart"]');
    await cart.click();

    // asertion for checking correct item added to cart

    await page.locator("div li").first().waitFor(); // we use wait here because isVisible method does not support auto wait mechanism
    const checkProduct =  await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();   
    // h3 is tag name and identifying the product name based on that,isVisible method is check whether the element is Visible
    await expect(checkProduct).toBeTruthy();

    // 2nd assertion
    await expect(page.locator("h3:has-text('ADIDAS ORIGINAL')")).toBeVisible();

    // assertion using visible text
    await expect(page.locator("h3:has-text('ADIDAS ORIGINAL')")).toHaveText(productName);


});