import { queryOptions, useQuery } from '@tanstack/react-query';

import { client } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';

export const getBlogs = ({ limit }: { limit?: number } = {}) => {
  return client.blogs.$get({ query: { limit } });
};

export const getBlogsQueryOptions = ({
  limit = 10,
}: { limit?: number } = {}) => {
  return queryOptions({
    queryKey: ['blogs', { limit }],
    queryFn: () => getBlogs({ limit }),
  });
};

type UseBlogsOptions = {
  limit?: number;
  queryConfig?: QueryConfig<typeof getBlogsQueryOptions>;
};

export const useBlogs = ({ queryConfig, limit }: UseBlogsOptions = {}) => {
  return useQuery({
    ...getBlogsQueryOptions({ limit }),
    ...queryConfig,
  });
};
