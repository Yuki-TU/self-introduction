import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';

import type { Content } from '@/types/api';

export interface Methods {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Content>;
  };
}
