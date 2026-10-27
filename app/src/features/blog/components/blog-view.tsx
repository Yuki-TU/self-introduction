'use client';

import { Spinner } from '@/components/ui/spinner';
import { formatDate } from '@/utils/format';

import { useBlog } from '../api/get-blog';

/**
 * ブログ詳細コンポーネント
 * @param props.blogId ブログのid
 * @returns コンポーネント
 */
export const BlogView = ({ blogId }: { blogId: string }) => {
  const blogQuery = useBlog({ blogId });

  if (blogQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const blog = blogQuery.data;

  if (!blog) return null;

  return (
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
};
