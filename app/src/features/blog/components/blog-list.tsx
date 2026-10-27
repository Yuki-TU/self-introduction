'use client';

import { Spinner } from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { formatDate } from '@/utils/format';

import { useBlogs } from '../api/get-blogs';

import { BlogListItem } from './blog-list-item';

/**
 * ブログ一覧コンポーネント
 * @returns コンポーネント
 */
export const BlogList = () => {
  const blogsQuery = useBlogs();

  if (blogsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const blogs = blogsQuery.data?.contents;

  if (!blogs) return null;

  return (
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
};
