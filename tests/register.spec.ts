import { test, expect } from '@playwright/test';

test('Register User correcto', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    //chechar home page
    await expect(page).toHaveTitle(/Automation Exercise/);

    // find button a login and click
    await page.getByRole('link', { name: 'Login' }).click();

    // chechar pantalla login
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

    // ingresar nombre de usuario
    await page.fill('input[data-qa="signup-name"]', 'Carlos');
    // ingresar email
    await page.fill('input[data-qa="signup-email"]', 'carlosmtz@qa.com');
  
  
    // boton signup
    await page.click('button[data-qa="signup-button"]');

    
    // verificar pantalla 
    //await expect(page).toHaveTitle(/Enter Account Information/);


    // elegir titulo de cuenta
    await page.click('input[id="id_gender1"]');

    await page.fill('input[id="password"]', 'charmander');

    // poner fecha de nacimiento
    await page.selectOption('#days', '10');
    await page.selectOption('#months', '6');
    await page.selectOption('#years', '2020');


    // llenar nombre y apellido
    await page.fill('#first_name', 'Carlos');
    await page.fill('#last_name', 'Martinez');

    // datos de compañia
    await page.fill('#company', 'Pokemon Company');
    await page.fill('#address1', 'Pallet Town');

    // llenar datos de pais con usa
    await page.selectOption('#country', 'United States');
    await page.fill('#state', 'California');
    await page.fill('#city', 'San Francisco');
    await page.fill('#zipcode', '78378');
    await page.fill('#mobile_number', '637826839');

    // btn crear cuenta
    await page.click('button[data-qa="create-account"]');

    // verificar si se creo la cuenta
    await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Created!/i);

    // click continue
    await page.click('a[data-qa="continue-button"]');

    // checar login
    //await page.getByRole('link', { name: ' Logged in as carlos' }).click();

    // click borrar
    await page.click('a[href="/delete_account"]');

    // verificar si se borro la cuenta y la pagina
    await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Deleted!/i);
    await page.click('a[data-qa="continue-button"]');

});

test('Register User sin campo de last name', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    //chechar home page
    await expect(page).toHaveTitle(/Automation Exercise/);

    // find button a login and click
    await page.getByRole('link', { name: 'Login' }).click();

    // chechar pantalla login
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

    // ingresar nombre de usuario
    await page.fill('input[data-qa="signup-name"]', 'Carlos');
    // ingresar email
    await page.fill('input[data-qa="signup-email"]', 'carlosmtz@qa.com');
  
  
    // boton signup
    await page.click('button[data-qa="signup-button"]');

    
    // verificar pantalla 
    //await expect(page).toHaveTitle(/Enter Account Information/);


    // elegir titulo de cuenta
    await page.click('input[id="id_gender1"]');

    await page.fill('input[id="password"]', 'charmander');

    // poner fecha de nacimiento
    await page.selectOption('#days', '10');
    await page.selectOption('#months', '6');
    await page.selectOption('#years', '2020');


    // llenar nombre y apellido
    await page.fill('#first_name', 'Carlos');

    // datos de compañia
    await page.fill('#company', 'Pokemon Company');
    await page.fill('#address1', 'Pallet Town');

    // llenar datos de pais con usa
    await page.selectOption('#country', 'United States');
    await page.fill('#state', 'California');
    await page.fill('#city', 'San Francisco');
    await page.fill('#zipcode', '78378');
    await page.fill('#mobile_number', '637826839');

    // btn crear cuenta
    await page.click('button[data-qa="create-account"]');

    // verificar si se creo la cuenta
    await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Created!/i);

    // click continue
    await page.click('a[data-qa="continue-button"]');
    // checar login
    //await page.getByRole('link', { name: ' Logged in as carlos' }).click();

    // click borrar
    await page.click('a[href="/delete_account"]');

    // verificar si se borro la cuenta y la pagina
    await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Deleted!/i);
    await page.click('a[data-qa="continue-button"]');

});

