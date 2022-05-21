import { MicroCMSObjectContent, MicroCMSQueries } from "microcms-js-sdk";
import { Content } from "../../common";

export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, "draftKey" | "fields" | "depth">;
    resBody: Content & MicroCMSObjectContent;
  };
};
