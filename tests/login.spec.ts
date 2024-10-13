const { test, expect } = require("@playwright/test");

test.describe("The Internet - Login Page", () => {
  test("should fail to log in with invalid credentials", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill("#username", "invalidUser");
    await page.fill("#password", "invalidPassword");
    await page.click('button[type="submit"]');
    const errorMessage = await page.locator("#flash");
    await expect(errorMessage).toContainText("Your username is invalid!");
  });

  test("should log in successfully with valid credentials", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill("#username", "tomsmith");
    await page.fill("#password", "SuperSecretPassword!");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
  });
});
