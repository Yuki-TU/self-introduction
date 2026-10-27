import { BlogView } from '@/features/blog/components/blog-view';
import type { Content } from '@/types/api';

type BlogProps = {
  blog: Content;
};

/**
 * ブログ詳細の表示内容
 * @param props.blog ブログ詳細
 * @returns コンポーネント
 */
export const Blog = ({ blog }: BlogProps) => {
  return (
    <main className="flex-1 px-3">
      <BlogView blog={blog} />
    </main>
  );
};
