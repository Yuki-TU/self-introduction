import type { NextPage } from "next";
import Head from "next/head";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

/**
 * コンタクトページ
 * @returns コンポーネント
 */
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>y&apos;s room - CONTACT</title>
        <meta name="description" content="自己紹介のCONTACTページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto w-full flex-1 md:w-[1230px]">
        <h1 className="mb-10 text-center text-[40px]">CONTACT</h1>
        <a
          className="mx-auto my-10 block w-fit text-3xl"
          href="https://twitter.com/nerusan_main"
        >
          Twitter
        </a>
        <a
          className="mx-auto my-10 block w-fit text-3xl"
          href="https://speakerdeck.com/nerusan_main"
        >
          Speaker Deck
        </a>
        <a
          className="mx-auto my-10  block w-fit  text-3xl "
          href="https://github.com/Yuki-TU"
        >
          GitHub
        </a>
        <a
          className="mx-auto my-10 block w-fit text-3xl "
          href="https://qiita.com/Yuki-TU"
        >
          Qiita
        </a>
        <a
          className="mx-auto  my-10 block  w-fit text-3xl "
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
