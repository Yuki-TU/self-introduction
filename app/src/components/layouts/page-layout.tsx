import { ReactNode } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

type PageLayoutProps = {
  children: ReactNode;
};

/**
 * ヘッダーとフッターを持つ共通のページレイアウト
 * @param props.children ページの内容
 * @returns コンポーネント
 */
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
