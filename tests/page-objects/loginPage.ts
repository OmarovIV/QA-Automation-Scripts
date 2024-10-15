import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.fill('input[id="user-name"]', username);
    await this.page.fill('input[id="password"]', password);
    await this.page.click('input[id="login-button"]');
  }
}
