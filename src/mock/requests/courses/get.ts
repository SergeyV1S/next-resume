import { COURSES } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getCoursesConfig: RestRequestConfig = {
  path: "/courses",
  method: "get",
  routes: [
    {
      data: () => COURSES,
      settings: {
        status: 200
      }
    }
  ]
};
