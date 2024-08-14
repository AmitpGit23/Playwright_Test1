const {test , expect} = require('@playwright/test');

test('filtering', async ({page}) => {
    await page.goto("http://127.0.0.1:5500/List1.html");
     await page.getByRole("listitem")
       .filter({ hasText: 'Product 2' })
       .getByRole('button', {name: "Add to cart"})
       .click()
    

});
   
test('stock items ', async ({page}) => {

    await page.goto("http://127.0.0.1:5500/List1.html");
    await expect(page
        .getByRole('listitem')
        .filter({ hasNot: page.getByText('Product 2') }))
        .toHaveCount(1);
});


//  test('shopsy', async ({page}) => {

//     await page.goto("https://www.shopsy.in/");
//      await expect(page
//          .getByRole('listitem')
//         .filter({ hasNot: page.getByText('Product 2') }))
//          .toHaveCount(1);
//  });
