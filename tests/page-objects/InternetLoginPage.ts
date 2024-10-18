import { Page } from "@playwright/test";

export class InternetLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.waitForSelector('input[id="username"]');
    await this.page.fill('input[id="username"]', username);
    await this.page.waitForSelector('input[id="password"]');
    await this.page.fill('input[id="password"]', password);
    await this.page.waitForSelector('button[type="submit"]');
    await this.page.click('button[type="submit"]');
  }
}
