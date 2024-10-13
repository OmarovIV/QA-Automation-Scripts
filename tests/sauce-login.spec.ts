import { expect, test } from "@playwright/test";

test.describe("Sauce Demo Login", () => {
  test("should fail to log in with incorrect credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[id="user-name"]', "invalid_user");
    await page.fill('input[id="password"]', "invalid_password");
    await page.click('input[id="login-button"]');

    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toContainText(
      "Epic sadface: Username and password do not match"
    );
  });

  test("should log in successfully with valid credentials", async ({
    page,
  }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[id="user-name"]', "standard_user");
    await page.fill('input[id="password"]', "secret_sauce");
    await page.click('input[id="login-button"]');

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
