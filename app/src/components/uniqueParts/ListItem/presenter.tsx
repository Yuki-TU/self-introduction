import Router from "next/router";
import { memo } from "react";
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
const ListItem = memo((props: Props) => (
  <div
    className="cursor-pointer py-2 shadow-md"
    onClick={() => Router.push(props.href)}
  >
    <div className="p-4">
      <h3
        className="mb-1 truncate text-lg font-bold"
        title={props.title}
      >
        {props.title}
      </h3>
      <p className="text-[#777]">作成日: {props.createdAt}</p>
    </div>
  </div>
));

export default ListItem;
