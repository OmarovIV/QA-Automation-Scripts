import { expect, test } from "@playwright/test";

test.describe("Form Interaction on DemoQA", () => {
  test("should submit the form successfully", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    // Fill the form
    await page.fill("#userName", "John Doe");
    await page.fill("#userEmail", "john.doe@example.com");
    await page.fill("#currentAddress", "123 Main St");
    await page.fill("#permanentAddress", "456 Second St");
    await page.click("#submit");

    // Validate the outcome
    const outputName = await page.locator("#name");
    await expect(outputName).toContainText("John Doe");
  });
});
