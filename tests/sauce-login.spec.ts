import { expect, test } from "@playwright/test";
import { SauceLoginPage } from "./page-objects/SauceLoginPage";

test.describe("Sauce Demo Login", () => {
  test("should fail to log in with incorrect credentials", async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login("invalid_user", "invalid_password");
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toContainText(
      "Epic sadface: Username and password do not match"
    );
  });

  test("should log in successfully with valid credentials", async ({
    page,
  }) => {
    const loginPage = new SauceLoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
