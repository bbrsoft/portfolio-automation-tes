const { test, expect } = require('@playwright/test');

test('valid login', async ({ page }) => {
  await page.goto('https://example-nuxt-app.com/login');
  await page.fill('input[name="email"]', 'user@test.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});

test('invalid login', async ({ page }) => {
  await page.goto('https://example-nuxt-app.com/login');
  await page.fill('input[name="email"]', 'wrong@test.com');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message')).toContainText('Invalid credentials');
});
