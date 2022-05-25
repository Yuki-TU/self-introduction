import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full md:w-[1230px]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
