import { expect, test } from '@playwright/test';
test('End to end test scenarios with getByRole,getByText conjuction with filter logic ', async function ({ page }) {
    const email = 'vinaydaware@gmail.com';
    const password = 'Test@1234';
    const url = 'https://rahulshettyacademy.com/client/#/auth/login';
    await page.goto(url);

    const emailField = page.getByPlaceholder('email@example.com');
    const passField = page.getByPlaceholder('enter your passsword');
    const loginBtn = page.getByRole('button', { name: 'login' });
    const productName = 'ADIDAS ORIGINAL';



    await emailField.fill(email);
    await passField.fill(password);
    await loginBtn.click();
    await page.waitForLoadState('networkidle'); // used to wait untill all networks get loaded
    console.log(await page.url());

    await page.locator('.card-body b').first().waitFor();
    const productTitles = await page.locator('.card-body b').allTextContents();
    console.log(productTitles);

    const product = page.locator('.card-body').filter({ hasText: productName });
    await product.getByRole('button', { name: ' Add To Cart' }).click();

    const cartBtn = page.getByRole('listitem').getByRole('button', { name: 'Cart' });
    await cartBtn.click();

    await page.locator('div li').first().waitFor();
    await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();

    const checkOutBtn = page.getByRole('button', { name: 'Checkout' });
    await checkOutBtn.click();

    const selectCountry = page.getByPlaceholder('Select Country');
    await selectCountry.pressSequentially('Ind');
    await page.getByRole('button', { name: 'India' }).nth(1).click();

    const placeOrderBtn = page.getByText('PLACE ORDER');
    placeOrderBtn.click();

    const orderConfirmationMsg = page.getByText(' Thankyou for the order. ');
    console.log(orderConfirmationMsg);
    await expect(orderConfirmationMsg).toBeVisible();

    // Navigating to order history page
    const ordersBtn = page.getByRole('listitem').getByRole('button', { name: 'ORDERS' });
    await ordersBtn.click();
    const expordersPageUrl = 'https://rahulshettyacademy.com/client/#/dashboard/myorders';
    await page.getByText('Your Orders').waitFor();
    const actordersPageUrl = await page.url();
    console.log(actordersPageUrl);
    await expect(page).toHaveURL(expordersPageUrl);




});

