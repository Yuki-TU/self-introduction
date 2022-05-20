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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
