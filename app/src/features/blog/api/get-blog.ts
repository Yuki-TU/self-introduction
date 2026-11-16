import type { MicroCMSObjectContent } from 'microcms-js-sdk';
import { cache } from 'react';

import { apiFetch } from '@/lib/api-client';
import type { Content } from '@/types/api';

// generateMetadataとページ本体で同じ記事を取得するため、リクエスト内で結果を使い回す
export const getBlog = cache((blogId: string) => {
  return apiFetch<Content & MicroCMSObjectContent>(`/blogs/${blogId}`);
});
