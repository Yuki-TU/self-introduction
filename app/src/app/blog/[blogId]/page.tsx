import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import type { Metadata } from 'next';

import { getBlog, getBlogQueryOptions } from '@/features/blog/api/get-blog';
import { getBlogs } from '@/features/blog/api/get-blogs';

import { Blog } from './_components/blog';

type Props = {
  params: Promise<{ blogId: string }>;
};

// generateStaticParamsで返したパス以外は404にする
export const dynamicParams = false;

// 静的生成のためのパスを指定
export async function generateStaticParams() {
  const data = await getBlogs();

  return data.contents.map((content) => ({ blogId: content.id }));
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { blogId } = await params;

  const blog = await getBlog({ blogId });

  return {
    title: `y's room - ${blog.title}`,
    description: '自己紹介のトップページです。',
  };
};

const preloadData = async (blogId: string) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getBlogQueryOptions(blogId));

  const dehydratedState = dehydrate(queryClient);

  return {
    dehydratedState,
    queryClient,
  };
};

/**
 * 各種ブログの詳細記事ページ
 * @param props.params ブログのid
 * @returns コンポーネント
 */
const BlogPage = async ({ params }: Props) => {
  const { blogId } = await params;

  const { dehydratedState, queryClient } = await preloadData(blogId);

  const blog = queryClient.getQueryData(getBlogQueryOptions(blogId).queryKey);

  if (!blog) return <div>Blog not found</div>;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Blog blogId={blogId} />
    </HydrationBoundary>
  );
};

export default BlogPage;
