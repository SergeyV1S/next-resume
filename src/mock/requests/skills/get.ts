import { SKILLS } from "@mock/database";
import type { RestRequestConfig } from "mock-config-server";

export const getSkillsConfig: RestRequestConfig = {
  path: "/skills",
  method: "get",
  routes: [
    {
      data: () => SKILLS,
      settings: {
        status: 200
      }
    }
  ]
};
