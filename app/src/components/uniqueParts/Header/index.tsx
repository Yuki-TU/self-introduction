import router from "next/router";
import { memo } from "react";
import HeaderComponent from "./presenter";

/**
 * ヘッダーコンテナ
 * @returns ヘッダーコンポーネント
 */
const HeaderContainer = () => {
  return <HeaderComponent onclickHome={() => router.push("/")} />;
};

export default memo(HeaderContainer);
