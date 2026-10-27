import type { Metadata } from "next";

import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { getBlogs } from "@/features/blog/api/get-blogs";
import { BlogList } from "@/features/blog/components/blog-list";

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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full flex-1 md:w-[1230px]">
        <h1 className="text-center text-[40px]">BLOG</h1>
        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
