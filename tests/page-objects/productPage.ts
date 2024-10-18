import { Page } from "@playwright/test";

export class ProductPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.click('button[id="add-to-cart-sauce-labs-backpack"]');
  }

  async checkCartBadge() {
    const cartBadge = await this.page.locator(".shopping_cart_badge");
    return cartBadge;
  }
}
