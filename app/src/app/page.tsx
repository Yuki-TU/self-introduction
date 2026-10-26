import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Article from "@/components/ui/Article";
import Avatar from "@/components/ui/Avatar";

/**
 * トップページ
 * @returns コンポーネント
 */
export default function Home() {
  const profile =
    "初めまして、@Yuki-TUです。福岡でWebエンジニアをしております。主に、動画関連の会社でフロントエンド周りの開発をやっております。趣味は、キャンプ、ネットサーフィンです。最近は、可読性、汎用性、保守性のある設計・書き方を考えながらソースコードを書くようにしています。";
  const skill =
    "TypeScript, JavaScript, C, React, Nextjs, Redux, HTML, CSS, Sass, Docker, JEST";
  const career =
    "大学時代は、IT会社でVue.jsによるアプリの開発を経験。新卒で組み込み系の開発経験を経て、現在は、動画を扱う会社で主にReactアプリケーション開発に従事。動画配信技術の基礎を学びつつ、Web開発の基本を学びました。主に、書籍をベースにより良いコードの書き方、プログラミングをする上に注意すべきことを学びました。また、コードレビューの導入、ドキュメントのテンプレート化、アジャイルスクラムを一部導入した開発の提案・推進をしてきました。";

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="hidden sm:block">
          <Image
            src="/hero.png"
            alt="Y's Room"
            className="h-auto w-full"
            sizes="100vw"
            height="720"
            width="1920"
            priority
          />
        </div>
        <div className="sm:hidden">
          <Image
            src="/hero-sp.png"
            alt="Y's Room"
            className="h-auto w-full"
            sizes="100vw"
            height="850"
            width="880"
            priority
          />
        </div>
        <h1 className="mt-4 text-center text-[40px]">ABOUT</h1>
        <div className="flex flex-col px-3 md:mx-0 md:flex-row">
          <Avatar
            className="mx-auto my-8 flex-1 md:pl-20 "
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
}
