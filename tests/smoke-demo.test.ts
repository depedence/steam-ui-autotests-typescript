import { test, expect } from '@playwright/test';
import { epic, feature, story, severity, description } from 'allure-js-commons';

test.describe('Demo', () => {
  test('intentionally failing test', async () => {
    await epic('Demo');
    await feature('Demonstration of different test statuses in Allure report');
    await story('Failed status demo');
    await severity('trivial');
    await description(
      'This test is intentionally designed to fail. It demonstrates how a failed test looks in the Allure report and is not a real bug.'
    );

    expect(true, 'This test intentionally fails to demonstrate the FAILED status in the Allure report').toBe(false);
  });

  test.skip('intentionally skipped test', async () => {
    await epic('Demo');
    await feature('Demonstration of different test statuses in Allure report');
    await story('Skipped status demo');
    await severity('trivial');
  });
});
