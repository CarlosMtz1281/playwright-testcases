import { test, expect } from '@playwright/test';

test('Logout User correct', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  //look for h1 automation-exercise
  await expect(page).toHaveTitle(/Automation Exercise/);

  // find button a login and click
  await page.getByRole('link', { name: 'Login' }).click();

  // find Login to your account h1
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

  //enter "carlosmtz@hotmail.com" in Email Address inside the login form 
  await page.locator('[data-qa="login-email"]').click();
  await page.locator('[data-qa="login-email"]').fill('carlosmtz@hotmail.com');

  
  //enter "tec" in password
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('tec')

  //click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // look for " Logged in as carlos" in a tag
  //await page.getByRole('link', { name: ' Logged in as carlos' }).click();

  //click the logout button
  await page.getByRole('link', { name: 'Logout' }).click();

});

test('Logout User sin tener session', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    //chechar home page
    await expect(page).toHaveTitle(/Automation Exercise/);

    //click the logout button
    await page.getByRole('link', { name: 'Logout' }).click();
});