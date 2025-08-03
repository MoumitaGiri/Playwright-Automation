const {test, expect} = require('@playwright/test')

//Just to understand basic flow, how to call function and how to print and execute/run test scripts
//const {hello, helloworld} = require('./demo/hello')
//OR
//import { hello, helloworld } from './demo/hello';
//console.log (hello()); // This will return 'Hello'
//console.log (helloworld()); // This will return 'Hello World'

test('My First Test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
}) // test function to declare tests and the expect function to write assertions
