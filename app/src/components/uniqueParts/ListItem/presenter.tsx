import router from "next/router";
import React from "react";
import { Content } from "../../../../libs/api/common";

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
const ListItem = React.memo((props: Props) => (
  <div
    className="py-2 shadow-md cursor-pointer"
    onClick={() => router.push(props.href)}
  >
    <div className="p-4">
      <h3
        className="overflow-hidden mb-1 text-lg font-bold text-ellipsis whitespace-nowrap"
        title={props.title}
      >
        {props.title}
      </h3>
      <p className="text-[#777]">作成日: {props.createdAt}</p>
    </div>
  </div>
));

export default ListItem;
