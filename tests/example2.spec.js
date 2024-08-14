// @ts-check
const { test, expect } = require('@playwright/test');
 
// test("githubme", async ({page}) => {
//   await page.goto("https://github.com/aryan1403");
 
//   await expect(page).toHaveTitle(/aryan1403/)
// })
 
test("btnclick -test 3", async ({page}) => {
  await page.goto("https://www.google.co.in/");
 
  await expect(page.getByLabel("Search")).toBeTruthy()
})
 
// test('get started link', async ({page}) => {
//   await page.goto("https://playwright.dev/");
 
//   await page.getByRole('link', {name: 'Get started'}).click()
 
//   await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
// })
 
test('my test - test 4', async ({page}) => {
  await page.goto("https://playwright.dev/")
  const h1 = await page.locator(".highlight_gXVj").first()
 
  await expect(h1).toHaveText(/Playwright/)
})
 
 
test('cloud that', async ({page}) => {
  await page.goto("https://testprep.cloudthat.com/login/index.php");
  await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
  await page.getByPlaceholder("Password").fill("123");
 
  await page.locator("#loginbtn").click()
 
  // T&C
  // checkbox
  // await page.getByLabel("I agree to the terms & conditions").check()
 
  // radio btn
  // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
});