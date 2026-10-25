import Router from "next/router";
import { memo } from "react";
import HeaderComponent from "./presenter";

/**
 * ヘッダーコンテナ
 * @returns ヘッダーコンポーネント
 */
const HeaderContainer = () => {
  return (
    <HeaderComponent
      onclickHome={() => Router.push("/")}
      onclickBlog={() => Router.push("/blog")}
      onclickContact={() => Router.push("/contact")}
    />
  );
};

export default memo(HeaderContainer);
