import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { AppProvider } from '@/app/provider';

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
        <AppProvider>
          <div className="mx-auto w-full md:w-[1230px]">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
