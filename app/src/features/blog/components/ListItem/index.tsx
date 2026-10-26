"use client";

import { useRouter } from "next/navigation";
import { memo } from "react";
import type { Content } from "@/types/content";

type Props = Content & {
  /**クリックした際のリンク */
  href: string;
};

/**
 * リストの各アイテムコンポーネント
 * @param props.id id
 * @param props.title タイトル
 * @param props.createAt 作成日
 * @param props.content コンテンツ
 * @param props.href リリックした際のリンク
 */
const ListItem = memo((props: Props) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer py-2 shadow-md"
      onClick={() => router.push(props.href)}
    >
      <div className="p-4">
        <h3 className="mb-1 truncate text-lg font-bold" title={props.title}>
          {props.title}
        </h3>
        <p className="text-[#777]">作成日: {props.createdAt}</p>
      </div>
    </div>
  );
});

export default ListItem;
