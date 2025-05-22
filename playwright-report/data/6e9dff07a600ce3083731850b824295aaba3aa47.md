# Test info

- Name: Register User sin campo de last name
- Location: /Users/carlosmtz/repos/playwright-testcases/tests/register.spec.ts:76:5

# Error details

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[id="id_gender1"]')

    at /Users/carlosmtz/repos/playwright-testcases/tests/register.spec.ts:103:16
```

# Page snapshot

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Carlos
- textbox "Email Address": carlosmtz@qa.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- insertion:
  - iframe
```

# Test source

```ts
   3 | test('Register User correcto', async ({ page }) => {
   4 |     await page.goto('https://automationexercise.com/');
   5 |
   6 |     //chechar home page
   7 |     await expect(page).toHaveTitle(/Automation Exercise/);
   8 |
   9 |     // find button a login and click
   10 |     await page.getByRole('link', { name: 'Login' }).click();
   11 |
   12 |     // chechar pantalla login
   13 |     await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
   14 |
   15 |     // ingresar nombre de usuario
   16 |     await page.fill('input[data-qa="signup-name"]', 'Carlos');
   17 |     // ingresar email
   18 |     await page.fill('input[data-qa="signup-email"]', 'carlosmtz@qa.com');
   19 |   
   20 |   
   21 |     // boton signup
   22 |     await page.click('button[data-qa="signup-button"]');
   23 |
   24 |     
   25 |     // verificar pantalla 
   26 |     //await expect(page).toHaveTitle(/Enter Account Information/);
   27 |
   28 |
   29 |     // elegir titulo de cuenta
   30 |     await page.click('input[id="id_gender1"]');
   31 |
   32 |     await page.fill('input[id="password"]', 'charmander');
   33 |
   34 |     // poner fecha de nacimiento
   35 |     await page.selectOption('#days', '10');
   36 |     await page.selectOption('#months', '6');
   37 |     await page.selectOption('#years', '2020');
   38 |
   39 |
   40 |     // llenar nombre y apellido
   41 |     await page.fill('#first_name', 'Carlos');
   42 |     await page.fill('#last_name', 'Martinez');
   43 |
   44 |     // datos de compañia
   45 |     await page.fill('#company', 'Pokemon Company');
   46 |     await page.fill('#address1', 'Pallet Town');
   47 |
   48 |     // llenar datos de pais con usa
   49 |     await page.selectOption('#country', 'United States');
   50 |     await page.fill('#state', 'California');
   51 |     await page.fill('#city', 'San Francisco');
   52 |     await page.fill('#zipcode', '78378');
   53 |     await page.fill('#mobile_number', '637826839');
   54 |
   55 |     // btn crear cuenta
   56 |     await page.click('button[data-qa="create-account"]');
   57 |
   58 |     // verificar si se creo la cuenta
   59 |     await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Created!/i);
   60 |
   61 |     // click continue
   62 |     await page.click('a[data-qa="continue-button"]');
   63 |
   64 |     // checar login
   65 |     //await page.getByRole('link', { name: ' Logged in as carlos' }).click();
   66 |
   67 |     // click borrar
   68 |     await page.click('a[href="/delete_account"]');
   69 |
   70 |     // verificar si se borro la cuenta y la pagina
   71 |     await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Deleted!/i);
   72 |     await page.click('a[data-qa="continue-button"]');
   73 |
   74 | });
   75 |
   76 | test('Register User sin campo de last name', async ({ page }) => {
   77 |     await page.goto('https://automationexercise.com/');
   78 |
   79 |     //chechar home page
   80 |     await expect(page).toHaveTitle(/Automation Exercise/);
   81 |
   82 |     // find button a login and click
   83 |     await page.getByRole('link', { name: 'Login' }).click();
   84 |
   85 |     // chechar pantalla login
   86 |     await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
   87 |
   88 |     // ingresar nombre de usuario
   89 |     await page.fill('input[data-qa="signup-name"]', 'Carlos');
   90 |     // ingresar email
   91 |     await page.fill('input[data-qa="signup-email"]', 'carlosmtz@qa.com');
   92 |   
   93 |   
   94 |     // boton signup
   95 |     await page.click('button[data-qa="signup-button"]');
   96 |
   97 |     
   98 |     // verificar pantalla 
   99 |     //await expect(page).toHaveTitle(/Enter Account Information/);
  100 |
  101 |
  102 |     // elegir titulo de cuenta
> 103 |     await page.click('input[id="id_gender1"]');
      |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  104 |
  105 |     await page.fill('input[id="password"]', 'charmander');
  106 |
  107 |     // poner fecha de nacimiento
  108 |     await page.selectOption('#days', '10');
  109 |     await page.selectOption('#months', '6');
  110 |     await page.selectOption('#years', '2020');
  111 |
  112 |
  113 |     // llenar nombre y apellido
  114 |     await page.fill('#first_name', 'Carlos');
  115 |
  116 |     // datos de compañia
  117 |     await page.fill('#company', 'Pokemon Company');
  118 |     await page.fill('#address1', 'Pallet Town');
  119 |
  120 |     // llenar datos de pais con usa
  121 |     await page.selectOption('#country', 'United States');
  122 |     await page.fill('#state', 'California');
  123 |     await page.fill('#city', 'San Francisco');
  124 |     await page.fill('#zipcode', '78378');
  125 |     await page.fill('#mobile_number', '637826839');
  126 |
  127 |     // btn crear cuenta
  128 |     await page.click('button[data-qa="create-account"]');
  129 |
  130 |     // verificar si se creo la cuenta
  131 |     await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Created!/i);
  132 |
  133 |     // click continue
  134 |     await page.click('a[data-qa="continue-button"]');
  135 |     // checar login
  136 |     //await page.getByRole('link', { name: ' Logged in as carlos' }).click();
  137 |
  138 |     // click borrar
  139 |     await page.click('a[href="/delete_account"]');
  140 |
  141 |     // verificar si se borro la cuenta y la pagina
  142 |     await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Deleted!/i);
  143 |     await page.click('a[data-qa="continue-button"]');
  144 |
  145 | });
  146 |
  147 |
```