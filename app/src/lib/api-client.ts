import { env } from '@/config/env';

/**
 * microCMSのAPIを呼び出す（サーバー専用。APIキーをブラウザに出さないため）
 * @param path エンドポイントのパス（例: `/blogs`）
 * @param queries クエリパラメータ
 * @returns レスポンスのbody
 */
export const apiFetch = async <T>(
  path: string,
  queries: Record<string, string | number | undefined> = {},
): Promise<T> => {
  const url = new URL(`${env.API_URL}${path}`);

  for (const [key, value] of Object.entries(queries)) {
    if (value === undefined) continue;
    url.searchParams.set(key, String(value));
  }

  const res = await fetch(url, {
    headers: { 'X-MICROCMS-API-KEY': env.API_KEY! },
  });

  if (!res.ok) {
    throw new Error(`microCMS API error: ${res.status} ${url.pathname}`);
  }

  return res.json() as Promise<T>;
};
