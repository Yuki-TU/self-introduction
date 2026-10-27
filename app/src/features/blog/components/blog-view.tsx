import type { Content } from "@/types/api";
import { formatDate } from "@/utils/format";

type BlogViewProps = {
  blog: Content;
};

/**
 * ブログ詳細コンポーネント
 * @param props.blog ブログ詳細
 * @returns コンポーネント
 */
export const BlogView = ({ blog }: BlogViewProps) => (
  <>
    <h1 className="text-3xl font-bold">{blog.title}</h1>
    <p className="my-3 text-right text-sm text-[#777]">
      作成日: {formatDate(blog.createdAt)}
    </p>
    <div
      className="my-10"
      dangerouslySetInnerHTML={{
        __html: `${blog.content}`,
      }}
    />
  </>
);
