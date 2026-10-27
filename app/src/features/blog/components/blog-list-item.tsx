"use client";

import { useRouter } from "next/navigation";

import type { Content } from "@/types/api";

type BlogListItemProps = Content & {
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
export const BlogListItem = (props: BlogListItemProps) => {
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
};
