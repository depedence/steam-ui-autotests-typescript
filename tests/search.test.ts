import { test } from '@playwright/test';
import { epic, feature, story, severity, owner } from 'allure-js-commons';
import { MainPage } from '../src/pages/MainPage';
import { SearchPage } from '../src/pages/SearchPage';

test('search game by title', async ({ page }) => {
  await epic('Search');
  await feature('Search game by title');
  await story('Search field');
  await severity('critical');
  await owner('depedence');

  const mainPage = new MainPage(page);
  const searchPage = new SearchPage(page);

  await test.step('Open main page', async () => {
    await mainPage.open();
  });

  await test.step('Search for Dota 2', async () => {
    await searchPage.clickSearchField();
    await searchPage.findGameByTitle('Dota 2');
  });

  await test.step('Open first game in search results', async () => {
    await searchPage.openFirstGameInSearchRow();
  });

  await test.step('Verify game page title and URL', async () => {
    await searchPage.checkGameTitle('Dota 2');
    await searchPage.checkGamePageUrl('/570/Dota_2/');
  });
});
