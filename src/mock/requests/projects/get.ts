import { PROJECTS } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getProjectsConfig: RestRequestConfig = {
  path: "/projects",
  method: "get",
  routes: [
    {
      data: () => PROJECTS,
      settings: {
        status: 200
      }
    }
  ]
};
