import router from "next/router";
import HeaderComponent from "./presenter";

/**
 * ヘッダーコンテナ
 * @returns ヘッダーコンポーネント
 */
const HeaderContainer = () => {
  return <HeaderComponent onclickHome={() => router.push("/")} />;
};

export default HeaderContainer; // HeaderDom;
