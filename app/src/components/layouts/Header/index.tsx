"use client";

import { useRouter } from "next/navigation";
import { memo } from "react";
import HeaderComponent from "./presenter";

/**
 * ヘッダーコンテナ
 * @returns ヘッダーコンポーネント
 */
const HeaderContainer = () => {
  const router = useRouter();

  return (
    <HeaderComponent
      onclickHome={() => router.push("/")}
      onclickBlog={() => router.push("/blog")}
      onclickContact={() => router.push("/contact")}
    />
  );
};

export default memo(HeaderContainer);
