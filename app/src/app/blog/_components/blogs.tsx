import { BlogList } from '@/features/blog/components/blog-list';
import type { Content } from '@/types/api';

type BlogsProps = {
  blogs: Content[];
};

/**
 * ブログ一覧の表示内容
 * @param props.blogs ブログ一覧
 * @returns コンポーネント
 */
export const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <main className="mx-auto w-full flex-1 md:w-[1230px]">
      <h1 className="text-center text-[40px]">BLOG</h1>
      <BlogList blogs={blogs} />
    </main>
  );
};
