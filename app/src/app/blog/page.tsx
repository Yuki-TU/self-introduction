import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import type { Metadata } from 'next';

import { getBlogsQueryOptions } from '@/features/blog/api/get-blogs';

import { Blogs } from './_components/blogs';

export const metadata: Metadata = {
  title: "y's room",
  description: '自己紹介のトップページです。',
};

/**
 * ブログ一覧表示ページ
 * @returns コンポーネント
 */
const BlogsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getBlogsQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Blogs />
    </HydrationBoundary>
  );
};

export default BlogsPage;
