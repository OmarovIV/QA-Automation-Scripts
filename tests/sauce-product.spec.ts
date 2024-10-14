import { expect, test } from "@playwright/test";

test.describe("Sauce Demo Product Selection", () => {
  test("should add a product to the cart", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[id="user-name"]', "standard_user");
    await page.fill('input[id="password"]', "secret_sauce");
    await page.click('input[id="login-button"]');

    // Add product to cart
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]');
    const cartBadge = await page.locator(".shopping_cart_badge");

    await expect(cartBadge).toContainText("1");
  });
});
