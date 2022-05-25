import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Header } from "../../components/uniqueParts";

/**
 * コンタクトページ
 * @returns コンポーネント
 */
const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>y&apos;s room - CONTACT</title>
        <meta name="description" content="自己紹介のCONTACTページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1 mx-auto w-full md:w-[1230px]">
        <h1 className="mb-10 text-[40px] text-center">CONTACT</h1>
        <a
          className="block m-10 text-3xl text-center"
          href="https://twitter.com/nerusan_main"
        >
          Twitter
        </a>
        <a
          className="block m-10 text-3xl text-center"
          href="https://speakerdeck.com/nerusan_main"
        >
          Speaker Deck
        </a>
        <a
          className="block m-10 text-3xl text-center"
          href="https://github.com/Yuki-TU"
        >
          GitHub
        </a>
        <a
          className="block m-10 text-3xl text-center"
          href="https://qiita.com/Yuki-TU"
        >
          Qiita
        </a>
        <a
          className="block m-10 text-3xl text-center"
          href="https://zenn.dev/yuki_tu"
        >
          Zenn
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
