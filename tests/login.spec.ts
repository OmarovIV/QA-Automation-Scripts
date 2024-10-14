import { expect, test } from "@playwright/test";
import { login } from "./helpers/loginHelper";

test.describe("The Internet - Login Page", () => {
  test("should fail to log in with invalid credentials", async ({ page }) => {
    await login(
      page,
      "invalidUser",
      "invalidPassword",
      "https://the-internet.herokuapp.com/login",
      "#username",
      "#password",
      'button[type="submit"]'
    );
    const errorMessage = await page.locator("#flash");
    await expect(errorMessage).toContainText("Your username is invalid!");
  });

  test("should log in successfully with valid credentials", async ({
    page,
  }) => {
    await login(
      page,
      "tomsmith",
      "SuperSecretPassword!",
      "https://the-internet.herokuapp.com/login",
      "#username",
      "#password",
      'button[type="submit"]'
    );
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
  });
});
