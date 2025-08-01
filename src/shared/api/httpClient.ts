const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export type TRequestOptions = Omit<RequestInit, "body"> & {
  body?: Record<string, any> | FormData;
};

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<T>(endpoint: string, options: TRequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = new Headers({
      "Content-Type": "application/json",
      ...options.headers
    });

    const config: RequestInit = {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      throw new Error(error?.message || "Request failed");
    }

    return response.json() as Promise<T>;
  }

  get<T>(endpoint: string, options?: TRequestOptions): Promise<T> {
    return this.request(endpoint, { ...options, method: "GET" });
  }

  post<T>(endpoint: string, body: any, options?: TRequestOptions): Promise<T> {
    return this.request(endpoint, { ...options, method: "POST", body });
  }

  put<T>(endpoint: string, body: any, options?: TRequestOptions): Promise<T> {
    return this.request(endpoint, { ...options, method: "PUT", body });
  }
  delete<T>(endpoint: string, options?: TRequestOptions): Promise<T> {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }
}

export const api = new ApiClient(API_BASE_URL || "http://localhost:3000/api");
