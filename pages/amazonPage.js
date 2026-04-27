class AmazonPage {
  constructor(page) {
    this.page = page;
    this.searchBox = '#twotabsearchtextbox';
    this.productLinks = 'a.a-link-normal.s-no-outline';
    this.priceWhole = '.a-price-whole';
    this.addToCartBtn = '#add-to-cart-button';
  }

  async goToAmazon() {
    await this.page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });
  }

  async searchProduct(product) {
  await this.page.fill(this.searchBox, product);
  await this.page.press(this.searchBox, 'Enter');

  await this.page.waitForSelector(this.productLinks, { timeout: 15000 });

  await this.page.waitForTimeout(2000);
}

  async selectFirstProductAndGetPrice() {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.page.locator(this.productLinks).first().click()
  ]);

  await newPage.waitForLoadState('domcontentloaded');

  await newPage.waitForTimeout(2000);

  let price = "Not Found";

  try {
    await newPage.waitForSelector(this.priceWhole, { timeout: 5000 });
    price = await newPage.locator(this.priceWhole).first().textContent();
  } catch (e) {
    console.log("Price not found, continuing...");
  }

  return { newPage, price };
}

 async addToCart(page) {
  try {
  
    await page.waitForSelector(this.addToCartBtn, { timeout: 3000 });

    const addBtn = page.locator(this.addToCartBtn).first();

    if (await addBtn.isVisible()) {
      await addBtn.click({ timeout: 2000 });
      console.log("Added to cart");
    } else {
      console.log("Add to cart not visible");
    }
  } catch (e) {
    console.log("Add to cart skipped (variant / overlay / timeout)");
  }
}
}

module.exports = { AmazonPage };