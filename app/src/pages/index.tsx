import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header } from "../components/uniqueParts";

/**
 * トップページ
 * @returns コンポーネント
 */
const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>y&apos;s room</title>
        <meta name="description" content="自己紹介のトップページです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-1">
        <Image
          className="mt-[200px]"
          src="/home.png"
          alt="logo"
          objectFit="cover"
          sizes="100vw"
          height="425"
          width="1440"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
