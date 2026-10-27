import { queryOptions, useQuery } from '@tanstack/react-query';

import { client } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';

export const getBlog = ({ blogId }: { blogId: string }) => {
  return client.blogs._id(blogId).$get();
};

export const getBlogQueryOptions = (blogId: string) => {
  return queryOptions({
    queryKey: ['blogs', blogId],
    queryFn: () => getBlog({ blogId }),
  });
};

type UseBlogOptions = {
  blogId: string;
  queryConfig?: QueryConfig<typeof getBlogQueryOptions>;
};

export const useBlog = ({ blogId, queryConfig }: UseBlogOptions) => {
  return useQuery({
    ...getBlogQueryOptions(blogId),
    ...queryConfig,
  });
};
