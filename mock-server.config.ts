import type { FlatMockServerConfig } from "mock-config-server";

import * as REQUESTS from "./src/mock";

const mockServerConfig: FlatMockServerConfig = [
  {
    baseUrl: "/api",
    port: 8000,
    staticPath: {
      path: "/mock/static/images",
      prefix: "/static"
    }
  },
  {
    interceptors: {
      request: ({ setDelay }) => setDelay(2000)
    },
    configs: Object.values(REQUESTS)
  }
];

export default mockServerConfig;
