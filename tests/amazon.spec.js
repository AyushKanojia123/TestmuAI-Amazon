const { test, expect } = require('@playwright/test');
const { AmazonPage } = require('../pages/amazonPage');

test.describe.parallel('Amazon Automation Tests', () => {

  test('Test Case 1: iPhone', async ({ page }) => {
    const amazon = new AmazonPage(page);

    await amazon.goToAmazon();
    await amazon.searchProduct('iPhone 15');

    const { newPage, price } = await amazon.selectFirstProductAndGetPrice();

    console.log(`iPhone Price: ${price}`);

    // ✅ reduce internal waits
    await newPage.setDefaultTimeout(5000);

    await amazon.addToCart(newPage);

    await expect(newPage).toBeTruthy();

    // 🔥 CRITICAL FIX (same as Galaxy)
    await newPage.close({ runBeforeUnload: true });
  });


  test('Test Case 2: Galaxy', async ({ page }) => {
    const amazon = new AmazonPage(page);

    await amazon.goToAmazon();
    await amazon.searchProduct('Samsung Galaxy S23');

    const { newPage, price } = await amazon.selectFirstProductAndGetPrice();

    console.log(`Galaxy Price: ${price}`);

    // ✅ reduce internal waits
    await newPage.setDefaultTimeout(5000);

    await amazon.addToCart(newPage);

    await expect(newPage).toBeTruthy();

    // 🔥 CRITICAL FIX
    await newPage.close({ runBeforeUnload: true });
  });

});