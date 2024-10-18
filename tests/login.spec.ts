import { expect, test } from "@playwright/test";
import { InternetLoginPage } from "./page-objects/InternetLoginPage";

test.describe("The Internet - Login Page", () => {
  test("should fail to log in with invalid credentials", async ({ page }) => {
    const loginPage = new InternetLoginPage(page);
    await page.goto("https://the-internet.herokuapp.com/login");
    await loginPage.login("invalidUser", "invalidPassword");
    const errorMessage = await page.locator("#flash");
    await expect(errorMessage).toContainText("Your username is invalid!");
  });

  test("should log in successfully with valid credentials", async ({
    page,
  }) => {
    const loginPage = new InternetLoginPage(page);
    await page.goto("https://the-internet.herokuapp.com/login");
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
  });
});
