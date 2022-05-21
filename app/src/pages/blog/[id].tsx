import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { client } from "../../../libs/api/client";
import { Content } from "../../../libs/api/common";
import { getDate } from "../../../libs/time";
import { Footer, Header } from "../../components/uniqueParts";

/**
 * 各種ブログの詳細記事ページ
 * @param param0.blog ブログの情報
 * @returns コンポーネント
 */
export default function BlogId({ blog }: { blog: Content }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>y&apos;s room - {blog.title}</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 px-3">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="my-3 text-sm text-right text-[#777]">
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
