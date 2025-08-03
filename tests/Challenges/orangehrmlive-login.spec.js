import {test, expect} from '@playwright/test';

test('OrangeHRM Live Login Test', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('xpath=//input[@placeholder="Password"]').fill('admin123');
    await page.locator('div.orangehrm-login-action> button').click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator('div.oxd-topbar-header-userarea > ul > li > span > i').click();
    await page.locator('text=Logout').click();
    await page.waitForEvent('load');
    await page.close();
})