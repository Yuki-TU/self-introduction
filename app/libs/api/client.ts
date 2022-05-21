import aspida from "@aspida/fetch";
import api from "./$api";

const fetchConfig = {
  headers: {
    "X-MICROCMS-API-KEY": process.env.API_KEY!,
  },
  baseURL: "https://nerusan.microcms.io/api/v1",
};

// apiクライアント
// microcmsのデータ取得はこちらを利用
export const client = api(aspida(fetch, fetchConfig));
