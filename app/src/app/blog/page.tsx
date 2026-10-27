import type { Metadata } from "next";

import { getBlogs } from "@/features/blog/api/get-blogs";

import { Blogs } from "./_components/blogs";

export const metadata: Metadata = {
  title: "y's room",
  description: "自己紹介のトップページです。",
};

/**
 * ブログ一覧表示ページ
 * @returns コンポーネント
 */
const BlogsPage = async () => {
  const { contents: blogs } = await getBlogs({ query: { limit: 10 } });

  return <Blogs blogs={blogs} />;
};

export default BlogsPage;
