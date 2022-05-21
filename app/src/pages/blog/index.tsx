import Head from "next/head";
import { client } from "../../../libs/api/client";
import { Content } from "../../../libs/api/common";
import { getDate } from "../../../libs/time";
import { Footer, Header } from "../../components/uniqueParts";
import { ListItem } from "../../components/uniqueParts/ListItem";

/**
 * ブログ一覧表示ページ
 * @param param0.blogs ブログ一覧情報
 * @returns コンポーネント
 */
export default function Home({ blogs }: { blogs: Content[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>y&apos;s room</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 mx-auto w-full md:w-[1230px]">
        <h1 className="text-[40px] text-center">BLOG</h1>
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
