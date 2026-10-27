import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "y's room",
  description: '自己紹介のトップページです。',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

/**
 * 全ページ共通のレイアウト
 * @param props.children 各ページ
 * @returns コンポーネント
 */
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <div className="mx-auto w-full md:w-[1230px]">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
