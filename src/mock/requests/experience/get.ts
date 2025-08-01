import { EXPERIENCE } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getExperienceConfig: RestRequestConfig = {
  path: "/experience",
  method: "get",
  routes: [
    {
      data: () => EXPERIENCE,
      settings: {
        status: 200
      }
    }
  ]
};
