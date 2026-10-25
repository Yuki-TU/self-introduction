import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { client } from "@/lib/api/client";
import type { Content } from "@/types/content";
import { getDate } from "@/utils/date";

/**
 * 各種ブログの詳細記事ページ
 * @param param0.blog ブログの情報
 * @returns コンポーネント
 */
export default function BlogId({ blog }: { blog: Content }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>y&apos;s room - {blog.title}</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </Head>
      <Header />
      <main className="flex-1 px-3">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="my-3 text-right text-sm text-[#777]">
          作成日: {getDate(blog.createdAt)}
        </p>
        <div
          className="my-10"
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.blogs.$get();
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ id: string }>) => {
  if (!params?.id) {
    return;
  }

  const data = await client.blogs._id(params.id).$get();

  return {
    props: {
      blog: data,
    },
  };
};
