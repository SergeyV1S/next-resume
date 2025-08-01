import type { TRequestOptions } from "./httpClient";
import { api } from "./httpClient";

class CreateFetch {
  private revalidate = 300;

  async fetchISR<T>(url: string, options?: TRequestOptions) {
    return api.get<T>(url, {
      next: { revalidate: this.revalidate, ...options?.next },
      ...options
    });
  }

  async fetchSSR<T>(url: string, options?: TRequestOptions) {
    return api.get<T>(url, {
      cache: "no-cache",
      ...options
    });
  }

  async fetchSSG<T>(url: string, options?: TRequestOptions) {
    return api.get<T>(url, {
      cache: "force-cache",
      ...options
    });
  }
}

export const createFetch = new CreateFetch();
