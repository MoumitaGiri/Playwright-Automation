import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';

test('Selectors Demo', async({page}) =>{

    await page.goto('https://saucedemo.com/');
    await page.pause();

    // using any object property
    await page.click('id=user-name');
    //await page.locator('id=user-name').click;
    await page.locator('id=user-name').fill('standard_user');
    //await page.locator('id=password').fill('secret_sauce');
    //await page.locator('[id="login-button"]').click();

    // using css selectors
    //await page.locator('#login-button').click();

    // using xpath
    await page.locator('xpath=//input[@name="password"]').fill('secret_sauce');
    //await page.locator('//*[@id="login-button"]').click();

    // using text
    await page.locator('text=Login').click();
    await page.locator('input:has-text("Login")').click();

    // using role
    await page.locator('role=button[name="Login"]').click();

    // Important notes: go to playwright.dev/docs/selectors for more details on selectors
    // I should study on Shadow DOM, ARIA, and other selectors
})

