import { test } from '@playwright/test';
import { epic, feature, story, severity, owner } from 'allure-js-commons';
import { MainPage } from '../src/pages/MainPage';
import { LoginPage } from '../src/pages/LoginPage';

test('open login page', async ({ page }) => {
  await epic('Login page');
  await feature('Elements on login page');
  await story('Login button');
  await severity('critical');
  await owner('depedence');

  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);

  await test.step('Open main page', async () => {
    await mainPage.open();
  });

  await test.step('Click login button', async () => {
    await loginPage.clickLoginButton();
  });

  await test.step('Verify login page', async () => {
    await loginPage.checkLoginPage();
  });
});
