import { RELEVANT_ACTIVITY } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getRelevantActivityConfig: RestRequestConfig = {
  path: "/relevant-activity",
  method: "get",
  routes: [
    {
      data: () => RELEVANT_ACTIVITY,
      settings: {
        status: 200
      }
    }
  ]
};
