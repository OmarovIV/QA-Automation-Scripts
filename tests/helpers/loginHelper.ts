import { Page } from "@playwright/test";

export async function login(
  page: Page,
  username: string,
  password: string,
  loginUrl: string,
  usernameSelector: string,
  passwordSelector: string,
  submitSelector: string
) {
  await page.goto(loginUrl);
  await page.fill(usernameSelector, username);
  await page.fill(passwordSelector, password);
  await page.click(submitSelector);
}
