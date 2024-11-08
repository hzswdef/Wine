import { JsonApiResponse } from "@interfaces/api/response";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

enum RequestMethods {
  GET = "GET",
}

abstract class Base {
  private static baseUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;
  private static http: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      jsonapi_include: 1
    },
  });

  private static async request<T>(
    method: RequestMethods,
    endpoint: string,
    config: AxiosRequestConfig | null = null,
  ): Promise<AxiosResponse<JsonApiResponse<T>>> {
    let request: AxiosRequestConfig = {
      method: method,
      url: endpoint,
    };

    if (config) {
      request = {
        ...request,
        ...config,
      };
    }

    return await this.http.request<JsonApiResponse<T>>(request);
  }

  protected static async _get<T>(
    endpoint: string,
    config: AxiosRequestConfig | null = null,
  ): Promise<AxiosResponse<JsonApiResponse<T>>> {
    return await this.request<T>(RequestMethods.GET, endpoint, config);
  }
}

export default Base;
