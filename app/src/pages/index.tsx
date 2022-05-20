import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Article, Avatar } from "../components/uiParts";
import { Footer, Header } from "../components/uniqueParts";

/**
 * トップページ
 * @returns コンポーネント
 */
const Home: NextPage = () => {
  const profile =
    "初めまして、@Yuki-TUです。福岡でWebエンジニアをしております。主に、動画関連の会社でフロントエンド周りの開発をやっております。趣味は、キャンプ、ネットサーフィンです。最近は、可読性、汎用性、保守性のある設計・書き方を考えながらソースコードを書くようにしています。";
  const skill =
    "TypeScript, JavaScript, C, React, Nextjs, Redux, HTML, CSS, Sass, Docker, JEST";
  const career =
    "大学時代は、IT会社でVue.jsによるアプリの開発を経験。新卒で組み込み系の開発権権を経て、現在は、動画を扱う会社で主にReactアプリケーション開発に従事。動画配信技術の基礎を学びつつ、Web開発の基本を学びました。主に、書籍をベースにより良いコードの書き方、プログラミングをする上に注意すべきことを学びました。また、コードレビューの導入、ドキュメントのテンプレート化、アジャイルスクラムを一部導入した開発の提案・推進をしてきました。";

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen md:w-[1230px]">
      <Head>
        <title>y&apos;s room</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1">
        <div className="hidden sm:inline">
          <Image
            src="/home.png"
            alt="logo"
            objectFit="cover"
            sizes="100vw"
            layout="responsive"
            height="300"
            width="800"
          />
        </div>
        <div className="sm:hidden">
          <Image
            src="/home.png"
            alt="logo"
            objectFit="cover"
            sizes="100vw"
            height="425"
            width="440"
          />
        </div>
        <h1 className="text-[40px] text-center">ABOUT</h1>
        <div className="flex flex-col px-3 md:flex-row md:mx-0">
          <Avatar
            className="flex-1 my-8 mx-auto md:pl-20 "
            src="/avatar.jpg"
            alt=""
            height={400}
            width={400}
          />
          <article className="flex-1">
            <Article title="Profile" text={profile} />
            <Article title="Skill" text={skill} />
            <Article title="Career" text={career} />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
