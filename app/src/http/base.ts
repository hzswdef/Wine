import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum RequestMethods {
  GET = "GET",
  POST = "POST"
}

abstract class Base {
  private static baseUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;
  private static http: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json"
    }
  });

  private static async request<T>(
    method: RequestMethods,
    endpoint: string,
    config: AxiosRequestConfig | null = null,
    data?: object
  ): Promise<AxiosResponse<T>> {
    let request: AxiosRequestConfig = {
      method: method,
      url: endpoint
    };

    if (config) {
      request = {
        ...request,
        ...config
      };
    }

    if (request.params === undefined) {
      request.params = {};
    }

    if (request.url === "/subrequests") {
      request.params._format = "json";
    } else {
      request.params.jsonapi_include = 1;
    }

    if (data) {
      request.data = data;
    }

    return await this.http.request<T>(request);
  }

  protected static async _get<T>(
    endpoint: string,
    config: AxiosRequestConfig | null = null
  ): Promise<AxiosResponse<T>> {
    return await this.request<T>(RequestMethods.GET, endpoint, config);
  }

  protected static async _post<T>(
    endpoint: string,
    config: AxiosRequestConfig | null = null,
    data: object
  ): Promise<AxiosResponse<T>> {
    return await this.request<T>(RequestMethods.POST, endpoint, config, data);
  }
}

export default Base;
