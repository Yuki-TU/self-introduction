import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import { Content } from "../common";

export interface Methods {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Content>;
  };
}
