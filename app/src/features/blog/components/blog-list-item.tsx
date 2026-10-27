import { Link } from '@/components/ui/link';
import type { Content } from '@/types/api';

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
  return (
    <Link
      className="block cursor-pointer py-2 text-inherit shadow-md hover:text-inherit"
      href={props.href}
    >
      <div className="p-4">
        <h3 className="mb-1 truncate text-lg font-bold" title={props.title}>
          {props.title}
        </h3>
        <p className="text-[#777]">作成日: {props.createdAt}</p>
      </div>
    </Link>
  );
};
