import { expect, test } from "@playwright/test";
import { login } from "./helpers/loginHelper";

test.describe("Sauce Demo Login", () => {
  test("should fail to log in with incorrect credentials", async ({ page }) => {
    await login(
      page,
      "invalid_user",
      "invalid_password",
      "https://www.saucedemo.com/",
      'input[id="user-name"]',
      'input[id="password"]',
      'input[id="login-button"]'
    );
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toContainText(
      "Epic sadface: Username and password do not match"
    );
  });

  test("should log in successfully with valid credentials", async ({
    page,
  }) => {
    await login(
      page,
      "standard_user",
      "secret_sauce",
      "https://www.saucedemo.com/",
      'input[id="user-name"]',
      'input[id="password"]',
      'input[id="login-button"]'
    );
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
