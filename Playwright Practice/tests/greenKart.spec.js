import { test } from '@playwright/test';
test('Green Kart end to end automation', async function ({ page }) {
    const url = 'https://rahulshettyacademy.com/seleniumPractise';
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    const products = page.locator('div.product', { hasText: '', visible: true });
    const productCount = await products.count()
    console.log(productCount);
    const productToAdd = ['Brocolli - 1 Kg', 'Cauliflower - 1 Kg', 'Beans - 1 Kg', 'Tomato - 1 Kg'];
    for (let i = 0; i < productCount; i++) {
        const productName = await products.nth(i).locator('h4').textContent();
        //console.log(productName);

        if (productToAdd.includes(productName)) {
            await products.nth(i).locator('button').click();

        }
    }
    const cart = page.locator('a.cart-icon');
    await cart.click();
    const checkoutBtn = page.locator('div.cart-preview button');
    await checkoutBtn.click();
    await page.locator('table.cartTable tbody').waitFor();
    const tableRows = page.locator('table.cartTable tbody tr');
    const rowCount = await page.locator('table.cartTable tbody tr').count();
    const placeOrderBtn = page.locator('text=Place Order');

    for (let i = 0; i < rowCount; i++) {
        const finalProducts = await tableRows.nth(i).locator('td p.product-name').first().textContent();

        if (productToAdd.includes(finalProducts)) {
            await page.locator('text=Place Order').click();
            break;

        }

    }

});