import type { NextPage } from "next";
import Head from "next/head";
import { Article, Avatar } from "../../components/uiParts";
import { Footer, Header } from "../../components/uniqueParts";

/**
 * トップページ
 * @returns コンポーネント
 */
const About: NextPage = () => {
  const profile =
    "初めまして、@Yuki-TUです。福岡でWebエンジニアをしております。主に、動画関連の会社でフロントエンド周りの開発をやっております。趣味は、キャンプ、ネットサーフィンです。最近は、可読性、汎用性、保守性のある設計・書き方を考えながらソースコードを書くようにしています。";
  const skill =
    "TypeScript, JavaScript, C, React, Nextjs, Redux, HTML, CSS, Sass, Docker, JEST";
  const career =
    "大手メーカーに勤めていましたが、レガシーな技術に嫌気をさし、新卒で入社して1年で、Web会社に転職。転職にあたって独学でReactアプリケーションを作成し、それをポートフォリオに転職活動を成功させることができました。現会社で最初の1年間は、プレイヤー開発に従事。動画配信技術の基礎を学びつつ、Web開発の基本を学びました。主に、書籍をベースにより良いコードの書き方、プログラミングをする上に注意すべきことを学びました。また、コードレビューの導入、ドキュメントのテンプレート化、アジャイルスクラムを一部導入した開発の提案・推進をしてきました。";

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>y&apos;s room</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 mx-auto w-full md:w-[1230px]">
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

export default About;
