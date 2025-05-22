# Test info

- Name: Register User sin campo de last name
- Location: /Users/carlosmtz/repos/playwright-testcases/tests/register.spec.ts:76:5

# Error details

```
Error: expect.toHaveText: Error: strict mode violation: locator('h2.title.text-center > b') resolved to 2 elements:
    1) <b>Enter Account Information</b> aka getByText('Enter Account Information')
    2) <b>Address Information</b> aka getByText('Address Information')

Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('h2.title.text-center > b')

    at /Users/carlosmtz/repos/playwright-testcases/tests/register.spec.ts:131:60
```

# Page snapshot

```yaml
- banner:
  - link "Website for practice automation":
    - /url: /
    - img "Website for practice automation"
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
- heading "Enter Account Information" [level=2]
- text: Title
- radio "Mr." [checked]
- text: Mr.
- radio "Mrs."
- text: Mrs. Name
- superscript: "*"
- textbox "Name *": Carlos
- text: Email
- superscript: "*"
- textbox "Email *" [disabled]: carlosmtz@qa.com
- text: Password
- superscript: "*"
- textbox "Password *": charmander
- text: Date of Birth
- combobox:
  - option "Day"
  - option "1"
  - option "2"
  - option "3"
  - option "4"
  - option "5"
  - option "6"
  - option "7"
  - option "8"
  - option "9"
  - option "10" [selected]
  - option "11"
  - option "12"
  - option "13"
  - option "14"
  - option "15"
  - option "16"
  - option "17"
  - option "18"
  - option "19"
  - option "20"
  - option "21"
  - option "22"
  - option "23"
  - option "24"
  - option "25"
  - option "26"
  - option "27"
  - option "28"
  - option "29"
  - option "30"
  - option "31"
- combobox:
  - option "Month"
  - option "January"
  - option "February"
  - option "March"
  - option "April"
  - option "May"
  - option "June" [selected]
  - option "July"
  - option "August"
  - option "September"
  - option "October"
  - option "November"
  - option "December"
- combobox:
  - option "Year"
  - option "2021"
  - option "2020" [selected]
  - option "2019"
  - option "2018"
  - option "2017"
  - option "2016"
  - option "2015"
  - option "2014"
  - option "2013"
  - option "2012"
  - option "2011"
  - option "2010"
  - option "2009"
  - option "2008"
  - option "2007"
  - option "2006"
  - option "2005"
  - option "2004"
  - option "2003"
  - option "2002"
  - option "2001"
  - option "2000"
  - option "1999"
  - option "1998"
  - option "1997"
  - option "1996"
  - option "1995"
  - option "1994"
  - option "1993"
  - option "1992"
  - option "1991"
  - option "1990"
  - option "1989"
  - option "1988"
  - option "1987"
  - option "1986"
  - option "1985"
  - option "1984"
  - option "1983"
  - option "1982"
  - option "1981"
  - option "1980"
  - option "1979"
  - option "1978"
  - option "1977"
  - option "1976"
  - option "1975"
  - option "1974"
  - option "1973"
  - option "1972"
  - option "1971"
  - option "1970"
  - option "1969"
  - option "1968"
  - option "1967"
  - option "1966"
  - option "1965"
  - option "1964"
  - option "1963"
  - option "1962"
  - option "1961"
  - option "1960"
  - option "1959"
  - option "1958"
  - option "1957"
  - option "1956"
  - option "1955"
  - option "1954"
  - option "1953"
  - option "1952"
  - option "1951"
  - option "1950"
  - option "1949"
  - option "1948"
  - option "1947"
  - option "1946"
  - option "1945"
  - option "1944"
  - option "1943"
  - option "1942"
  - option "1941"
  - option "1940"
  - option "1939"
  - option "1938"
  - option "1937"
  - option "1936"
  - option "1935"
  - option "1934"
  - option "1933"
  - option "1932"
  - option "1931"
  - option "1930"
  - option "1929"
  - option "1928"
  - option "1927"
  - option "1926"
  - option "1925"
  - option "1924"
  - option "1923"
  - option "1922"
  - option "1921"
  - option "1920"
  - option "1919"
  - option "1918"
  - option "1917"
  - option "1916"
  - option "1915"
  - option "1914"
  - option "1913"
  - option "1912"
  - option "1911"
  - option "1910"
  - option "1909"
  - option "1908"
  - option "1907"
  - option "1906"
  - option "1905"
  - option "1904"
  - option "1903"
  - option "1902"
  - option "1901"
  - option "1900"
- checkbox "Sign up for our newsletter!"
- text: Sign up for our newsletter!
- checkbox "Receive special offers from our partners!"
- text: Receive special offers from our partners!
- heading "Address Information" [level=2]
- paragraph:
  - text: First name
  - superscript: "*"
  - textbox "First name *": Carlos
- paragraph:
  - text: Last name
  - superscript: "*"
  - textbox "Last name *"
- paragraph:
  - text: Company
  - textbox "Company": Pokemon Company
- paragraph:
  - text: Address
  - superscript: "*"
  - text: (Street address, P.O. Box, Company name, etc.)
  - textbox "Address * (Street address, P.O. Box, Company name, etc.)": Pallet Town
- paragraph:
  - text: Address 2
  - textbox "Address 2"
- paragraph:
  - text: Country
  - superscript: "*"
  - combobox "Country *":
    - option "India"
    - option "United States" [selected]
    - option "Canada"
    - option "Australia"
    - option "Israel"
    - option "New Zealand"
    - option "Singapore"
- paragraph:
  - text: State
  - superscript: "*"
  - textbox "State *": California
- paragraph:
  - text: City
  - superscript: "*"
  - textbox "City * Zipcode *": San Francisco
- paragraph:
  - text: Zipcode
  - superscript: "*"
  - textbox: "78378"
- paragraph:
  - text: Mobile Number
  - superscript: "*"
  - textbox "Mobile Number *": "637826839"
- button "Create Account"
- insertion:
  - iframe
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- link "":
  - /url: "#top"
- insertion:
  - iframe
- insertion:
  - iframe
```

# Test source

```ts
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
  103 |     await page.click('input[id="id_gender1"]');
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
> 131 |     await expect(page.locator('h2.title.text-center > b')).toHaveText(/Account Created!/i);
      |                                                            ^ Error: expect.toHaveText: Error: strict mode violation: locator('h2.title.text-center > b') resolved to 2 elements:
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