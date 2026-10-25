import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import type { Content } from "@/types/content";

export interface Methods {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Content>;
  };
}
