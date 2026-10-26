import type { Metadata } from "next";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ListItem from "@/features/blog/components/ListItem";
import { client } from "@/lib/api/client";
import { getDate } from "@/utils/date";

export const metadata: Metadata = {
  title: "y's room",
  description: "自己紹介のトップページです。",
};

/**
 * ブログ一覧表示ページ
 * @returns コンポーネント
 */
export default async function BlogList() {
  const { contents: blogs } = await client.blogs.$get({ query: { limit: 10 } });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full flex-1 md:w-[1230px]">
        <h1 className="text-center text-[40px]">BLOG</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="mx-2">
              <ListItem
                {...blog}
                createdAt={getDate(blog.createdAt)}
                href={`/blog/${blog.id}`}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
