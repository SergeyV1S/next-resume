import { CANDIDATE_INFO } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getCandidateInfoConfig: RestRequestConfig = {
  path: "/candidate-info",
  method: "get",
  routes: [
    {
      data: () => CANDIDATE_INFO,
      settings: {
        status: 200
      }
    }
  ]
};
