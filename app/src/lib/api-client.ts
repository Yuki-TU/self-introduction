import aspida from '@aspida/fetch';

import { env } from '@/config/env';

import api from './api/$api';

const fetchConfig = {
  headers: {
    'X-MICROCMS-API-KEY': env.API_KEY!,
  },
  baseURL: env.API_URL,
};

// apiクライアント
// microcmsのデータ取得はこちらを利用
export const client = api(aspida(fetch, fetchConfig));
