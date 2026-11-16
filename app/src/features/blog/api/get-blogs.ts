import { apiFetch } from '@/lib/api-client';
import type { Content, ListResponse } from '@/types/api';

export const getBlogs = ({ limit }: { limit?: number } = {}) => {
  return apiFetch<ListResponse<Content>>('/blogs', { limit });
};
