import { paths } from "@/config/paths";
import type { Content } from "@/types/api";
import { formatDate } from "@/utils/format";

import { BlogListItem } from "./blog-list-item";

type BlogListProps = {
  blogs: Content[];
};

/**
 * ブログ一覧コンポーネント
 * @param props.blogs ブログ一覧
 * @returns コンポーネント
 */
export const BlogList = ({ blogs }: BlogListProps) => (
  <ul>
    {blogs.map((blog) => (
      <li key={blog.id} className="mx-2">
        <BlogListItem
          {...blog}
          createdAt={formatDate(blog.createdAt)}
          href={paths.blog.getHref(blog.id)}
        />
      </li>
    ))}
  </ul>
);
