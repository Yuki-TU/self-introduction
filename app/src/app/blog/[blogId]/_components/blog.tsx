import { BlogView } from '@/features/blog/components/blog-view';

/**
 * ブログ詳細の表示内容
 * @param props.blogId ブログのid
 * @returns コンポーネント
 */
export const Blog = ({ blogId }: { blogId: string }) => {
  return (
    <main className="flex-1 px-3">
      <BlogView blogId={blogId} />
    </main>
  );
};
