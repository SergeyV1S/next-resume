import { EDUCATION } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getEducationConfig: RestRequestConfig = {
  path: "/education",
  method: "get",
  routes: [
    {
      data: () => EDUCATION,
      settings: {
        status: 200
      }
    }
  ]
};
