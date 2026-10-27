import { client } from "@/lib/api-client";

/**
 * ブログ一覧を取得
 * @param options microCMSのクエリ等
 * @returns ブログ一覧のレスポンス
 */
export const getBlogs = (options?: Parameters<typeof client.blogs.$get>[0]) =>
  client.blogs.$get(options);
