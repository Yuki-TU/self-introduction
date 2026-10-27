import type { Metadata } from 'next';

import { getBlog } from '@/features/blog/api/get-blog';
import { getBlogs } from '@/features/blog/api/get-blogs';

import { Blog } from './_components/blog';

type Props = {
  params: Promise<{ id: string }>;
};

// generateStaticParamsで返したパス以外は404にする
export const dynamicParams = false;

// 静的生成のためのパスを指定
export async function generateStaticParams() {
  const data = await getBlogs();

  return data.contents.map((content) => ({ id: content.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  return {
    title: `y's room - ${blog.title}`,
    description: '自己紹介のトップページです。',
  };
}

/**
 * 各種ブログの詳細記事ページ
 * @param props.params ブログのid
 * @returns コンポーネント
 */
const BlogPage = async ({ params }: Props) => {
  const { id } = await params;
  const blog = await getBlog(id);

  return <Blog blog={blog} />;
};

export default BlogPage;
