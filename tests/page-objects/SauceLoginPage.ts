import { Page } from "@playwright/test";

export class SauceLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.waitForSelector('input[id="user-name"]');
    await this.page.fill('input[id="user-name"]', username);
    await this.page.waitForSelector('input[id="password"]');
    await this.page.fill('input[id="password"]', password);
    await this.page.waitForSelector('input[id="login-button"]');
    await this.page.click('input[id="login-button"]');
  }
}
