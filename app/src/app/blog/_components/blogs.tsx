import { BlogList } from '@/features/blog/components/blog-list';

/**
 * ブログ一覧の表示内容
 * @returns コンポーネント
 */
export const Blogs = () => {
  return (
    <main className="mx-auto w-full flex-1 md:w-[1230px]">
      <h1 className="text-center text-[40px]">BLOG</h1>
      <BlogList />
    </main>
  );
};
