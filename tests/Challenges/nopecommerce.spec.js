import {test, expect} from '@playwright/test';

test ('NopeCommerce Login Test', async ({page}) => {
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.pause();
    await page.locator('text=Log in').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/admin/');
    await page.waitForSelector('//a[contains(text(), "Logout")]',{timeout: 5000});
    await page.locator('//a[contains(text(), "Logout")]').click();
    await page.waitForEvent('load');
    await page.close();
})