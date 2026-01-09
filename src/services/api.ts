import { API_BASE_URL, API_TIMEOUT } from "@/constants";
import type { ApiResponse } from "@/types";

/**
 * HTTP request options
 */
interface RequestOptions extends RequestInit {
  timeout?: number;
}

/**
 * API error class
 */
export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Create a fetch request with timeout
 */
async function fetchWithTimeout(
  url: string,
  options: RequestOptions = {}
): Promise<Response> {
  const { timeout = API_TIMEOUT, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * API client for making HTTP requests
 */
export const api = {
  /**
   * Make a GET request
   */
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    return response.json();
  },

  /**
   * Make a POST request
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    return response.json();
  },

  /**
   * Make a PUT request
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    return response.json();
  },

  /**
   * Make a PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    return response.json();
  },

  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    return response.json();
  },
};

export default api;
