import {test,expect} from '@playwright/test';
test('Login with valid credentials,adding item to cart and validating item in cart and checkout',async function({page}){
    const url = 'https://rahulshettyacademy.com/client/';
    await page.goto(url);

    const userEmail = page.locator('#userEmail');
    const userPass = page.locator('#userPassword');
    const loginBtn = page.locator('[type="submit"]');
    const email = 'vinaydaware@gmail.com';

    await userEmail.fill(email);
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


    // handling auto suggestion drop down
    const checkoutBtn = page.locator('text=Checkout');
    await checkoutBtn.click();

    const CrediCardNumber = '4542 9931 9292 2296'
    const cvv = '123';
    const nameonCard = 'Vinay Namdeo Daware';
    const creditCardBox = page.locator('[value="4542 9931 9292 2293"]');
    const cvvfield = page.locator("input[class='input txt']:nth-child(2)").first();
    const nameOnCardField = page.locator("input[class='input txt']:nth-child(2)").last();

    await creditCardBox.fill(CrediCardNumber);
    await cvvfield.fill(cvv);
    await nameOnCardField.fill(nameonCard);

    // Autosuggestive country drop down handling
    const countryBox = page.locator('[placeholder*="Country"]');
    await countryBox.pressSequentially('Ind',{delay:100}); // pressSequentially method is used to fill the text one by one letter in the text box. You only need to press keys one by one if there is special keyboard handling on the page.

    // saving list of visible options after entering chracters into the country box in options variable
    const countryDropdown = page.locator('.ta-results');
    await countryDropdown.waitFor(); // waiting for matching options visibility

    //selecting india or any other country which matching the above characters "Ind"
    const optionsCount = await countryDropdown.locator('button').count();  // getting count of the visible options in dropdown

    // iterating over each and every option from country list
    for(let i = 0;i<optionsCount;i++ ){
      const text = await countryDropdown.locator('button').nth(i).textContent();
    
      if(text===' India')
      {
        // if the text matches the India it will click on India
        //click on matching text
        await countryDropdown.locator('button').nth(i).click();
        break;

      }
    }
    //validating login id is displayed on email id box
    const actualEmail = page.locator(".user__name label[type='text']");
    await expect(actualEmail).toHaveText(email);


    //click on place order button
    const placeOrderBtn = page.locator("[class*='btnn']");
    await placeOrderBtn.click();

    const actual_orderConfirmationMsg = page.locator(".hero-primary");
    const expected_orderConfirmationMsg = ' Thankyou for the order. ';
    await expect(actual_orderConfirmationMsg).toHaveText(expected_orderConfirmationMsg);

    // grabing or getting order ID
    const orderID = await page.locator('label.ng-star-inserted').textContent();
    console.log(`You have successfully ordered the ${productName} and the order ID is ${orderID}`)

    // checking orderID in orders table
    const ordersBtn = page.locator('button[routerlink*="myorders"]');
    await ordersBtn.click();

    const orderRows = page.locator('tbody tr');   // I used the rows because it consist all the data about the product sp it is easy to extract name and all
    const rowsCount = await orderRows.count();
    for(let i =0 ;i<rowsCount;i++)
    {
        const actualOrderID = await orderRows.nth(i).locator('th').textContent();     // it retrives only in only order ID column and get the text
        

        if(orderID.includes(actualOrderID))  // here I use includes because in OrderID it retrives | | with orderID
        {
            const viewBtn = orderRows.nth(i).locator('td button.btn-primary');
            await viewBtn.click();
            break;

        }

    }

});