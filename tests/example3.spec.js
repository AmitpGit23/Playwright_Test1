// @ts-check
const { test, expect } = require('@playwright/test');

test("mocks a fruit and doesn't call api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
      const json = [{ name: 'kiwi', id: 5 }];
      await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('kiwi')).toBeVisible();
  });

  test('records or updates the HAR file', async ({ page }) => {
    // Get the response from the HAR file
    await page.routeFromHAR('./hars/fruit.har', {
      url: '*/**/api/v1/fruits',
      update: true,
    });
  
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the fruit is visible
    await expect(page.getByText('Strawberry')).toBeVisible();
  });