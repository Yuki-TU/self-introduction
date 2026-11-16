import type { MicroCMSListResponse } from 'microcms-js-sdk';

import { apiFetch } from '@/lib/api-client';
import type { Content } from '@/types/api';

export const getBlogs = ({ limit }: { limit?: number } = {}) => {
  return apiFetch<MicroCMSListResponse<Content>>('/blogs', { limit });
};
