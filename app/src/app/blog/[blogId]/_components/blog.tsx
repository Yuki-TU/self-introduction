import type { MicroCMSObjectContent } from 'microcms-js-sdk';

import { BlogView } from '@/features/blog/components/blog-view';
import type { Content } from '@/types/api';

/**
 * ブログ詳細の表示内容
 * @param props.blog ブログ記事
 * @returns コンポーネント
 */
export const Blog = ({ blog }: { blog: Content & MicroCMSObjectContent }) => {
  return (
    <main className="flex-1 px-3">
      <BlogView blog={blog} />
    </main>
  );
};
