import { test } from '@playwright/test';
import { epic, feature, story, severity, owner } from 'allure-js-commons';
import { FilterPage } from '../src/pages/FilterPage';

test.describe('Store filters', () => {
  test('add filter tag', async ({ page }) => {
    await epic('Store filters');
    await feature('Add and remove tag filters on search page');
    await story('Add filter');
    await severity('critical');
    await owner('depedence');

    const filterPage = new FilterPage(page);

    await test.step('Open filter page', async () => {
      await filterPage.open();
    });

    await test.step('Add Action tag', async () => {
      await filterPage.addFilterTag('Action');
    });

    await test.step('Verify tag is applied', async () => {
      await filterPage.checkFilterTagApplied('Action');
    });
  });

  test('remove filter tag', async ({ page }) => {
    await epic('Store filters');
    await feature('Add and remove tag filters on search page');
    await story('Remove filter');
    await severity('critical');
    await owner('depedence');

    const filterPage = new FilterPage(page);

    await test.step('Open filter page and add tag', async () => {
      await filterPage.open();
      await filterPage.addFilterTag('Action');
      await filterPage.checkFilterTagApplied('Action');
    });

    await test.step('Remove tag', async () => {
      await filterPage.removeFilterTag('Action');
    });

    await test.step('Verify tag is removed', async () => {
      await filterPage.checkFilterTagNotApplied('Action');
    });
  });

  test('clear multiple filter tags', async ({ page }) => {
    await epic('Store filters');
    await feature('Add and remove tag filters on search page');
    await story('Clear filters');
    await severity('normal');
    await owner('depedence');

    const filterPage = new FilterPage(page);

    await test.step('Open filter page and add two tags', async () => {
      await filterPage.open();
      await filterPage.addFilterTag('Action');
      await filterPage.addFilterTag('Singleplayer');
      await filterPage.checkFilterTagApplied('Action');
      await filterPage.checkFilterTagApplied('Singleplayer');
    });

    await test.step('Remove both tags', async () => {
      await filterPage.removeFilterTag('Action');
      await filterPage.removeFilterTag('Singleplayer');
    });

    await test.step('Verify both tags are cleared', async () => {
      await filterPage.checkFiltersCleared('Action', 'Singleplayer');
    });
  });
});
