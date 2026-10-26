import type { Metadata } from "next";
import { cache } from "react";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { client } from "@/lib/api/client";
import { getDate } from "@/utils/date";

type Props = {
  params: Promise<{ id: string }>;
};

// generateStaticParamsで返したパス以外は404にする
export const dynamicParams = false;

// 同一リクエスト内でページとメタデータが同じ記事を取得するためキャッシュする
const getBlog = cache((id: string) => client.blogs._id(id).$get());

// 静的生成のためのパスを指定
export async function generateStaticParams() {
  const data = await client.blogs.$get();

  return data.contents.map((content) => ({ id: content.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  return {
    title: `y's room - ${blog.title}`,
    description: "自己紹介のトップページです。",
  };
}

/**
 * 各種ブログの詳細記事ページ
 * @param props.params ブログのid
 * @returns コンポーネント
 */
export default async function BlogDetail({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);

  return (
    <div className="flex min-h-screen flex-col">
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
