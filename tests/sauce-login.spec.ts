import { expect, test } from "@playwright/test";
import { SauceLoginPage } from "./page-objects/SauceLoginPage";

const users = [
  { username: "standard_user", password: "secret_sauce" },
  { username: "locked_out_user", password: "secret_sauce" },
  { username: "problem_user", password: "secret_sauce" },
];

test.describe("Parameterized Sauce Demo Login", () => {
  users.forEach((user) => {
    test(`should handle login for ${user.username}`, async ({ page }) => {
      const loginPage = new SauceLoginPage(page);
      await page.goto("https://www.saucedemo.com/");
      await loginPage.login(user.username, user.password);
      if (user.username === "locked_out_user") {
        const errorMessage = await page.locator('h3[data-test="error"]');
        await expect(errorMessage).toContainText(
          "Epic sadface: Sorry, this user has been locked out."
        );
      } else {
        await expect(page).toHaveURL(
          "https://www.saucedemo.com/inventory.html"
        );
      }
    });
  });
});
