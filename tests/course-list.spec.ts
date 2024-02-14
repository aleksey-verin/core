import { test, expect } from '@playwright/test';

test('create delete course item', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('название').click();
  await page.getByPlaceholder('название').fill('new-test-course-name');
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').fill('new-test-course-desc');
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.getByRole('heading', { name: 'new-test-course-name' })).toBeVisible();
  await expect(page.getByText('new-test-course-desc')).toBeVisible();
  await page.locator('div').filter({ hasText: /^new-test-course-namenew-test-course-descУдалить$/ }).getByRole('button').click();
  await expect(page.getByRole('heading', { name: 'new-test-course-name' })).not.toBeVisible();
  await expect(page.getByText('new-test-course-desc')).not.toBeVisible();
});