import { expect, test } from '@playwright/test';

test.describe('各ページの表示', () => {
  test('トップページにプロフィールが表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle("y's room");
    await expect(page.getByRole('heading', { name: 'ABOUT' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
  });

  test('コンタクトページにリンクが表示される', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveTitle("y's room - CONTACT");
    await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/Yuki-TU',
    );
  });

  test('ブログ一覧に記事が表示される', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.getByRole('heading', { name: 'BLOG' })).toBeVisible();
    await expect(page.getByText('テスト記事a')).toBeVisible();
  });

  test('ブログ詳細に記事本文が表示される', async ({ page }) => {
    await page.goto('/blog/a');
    await expect(page).toHaveTitle("y's room - テスト記事a");
    await expect(page.getByText('テスト本文a')).toBeVisible();
  });
});

test.describe('ヘッダーからの遷移', () => {
  test('BLOG → CONTACT → HOME の順に遷移できる', async ({ page }) => {
    await page.goto('/');

    await page.getByText('BLOG', { exact: true }).click();
    await expect(page).toHaveURL('/blog');

    await page.getByText('CONTACT', { exact: true }).click();
    await expect(page).toHaveURL('/contact');

    await page.getByText('HOME', { exact: true }).click();
    await expect(page).toHaveURL('/');
  });

  test('ブログ一覧の記事を押すと詳細に遷移する', async ({ page }) => {
    await page.goto('/blog');
    await page.getByText('テスト記事b').click();
    await expect(page).toHaveURL('/blog/b');
  });
});
