import { cache } from 'react';

import { client } from '@/lib/api-client';

/**
 * ブログ詳細を取得
 * 同一リクエスト内でページとメタデータが同じ記事を取得するためキャッシュする
 * @param id ブログのid
 * @returns ブログ詳細
 */
export const getBlog = cache((id: string) => client.blogs._id(id).$get());
