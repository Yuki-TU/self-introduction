import Head from "next/head";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ListItem from "@/features/blog/components/ListItem";
import { client } from "@/lib/api/client";
import type { Content } from "@/types/content";
import { getDate } from "@/utils/date";

/**
 * ブログ一覧表示ページ
 * @param param0.blogs ブログ一覧情報
 * @returns コンポーネント
 */
export default function Home({ blogs }: { blogs: Content[] }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>y&apos;s room</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </Head>
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

export const getStaticProps = async () => {
  const data = await client.blogs.$get({ query: { limit: 10 } });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
