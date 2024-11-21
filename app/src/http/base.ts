import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum RequestMethods {
	GET = "GET",
	POST = "POST"
}

interface MainRequestArguments {
	method: RequestMethods;
	endpoint: string;
	data?: object;
	requestOptions?: RequestOptions;
	config?: AxiosRequestConfig;
}

interface BaseRequestArguments {
	endpoint: string;
	requestOptions?: RequestOptions;
	config?: AxiosRequestConfig;
}

type GETRequestArguments = BaseRequestArguments;

interface POSTRequestArguments extends BaseRequestArguments {
	data?: object;
}

export interface RequestOptions {
	jsonapi_include?: boolean;
	format_json?: boolean;
}

abstract class Base {
	private static readonly baseUrl: string = import.meta.env
		.VITE_BACKEND_BASE_URL;
	private static readonly http: AxiosInstance = axios.create({
		baseURL: this.baseUrl,
		timeout: 32000,
		headers: {
			"Content-Type": "application/json"
		}
	});

	private static async request<T>({
		method,
		endpoint,
		data,
		requestOptions,
		config
	}: MainRequestArguments): Promise<AxiosResponse<T>> {
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

		if (data) {
			request.data = data;
		}

		if (request.params === undefined) {
			request.params = {};
		}

		request = this.applyRequestOptions(request, requestOptions);

		return await this.http.request<T>(request);
	}

	private static applyRequestOptions(
		request: AxiosRequestConfig,
		requestOptions: RequestOptions | undefined
	): AxiosRequestConfig {
		if (requestOptions) {
			// "jsonapi_include" parameter.
			if (requestOptions?.jsonapi_include !== undefined) {
				if (requestOptions.jsonapi_include) {
					request.params.jsonapi_include = 1;
				}
			}

			// "_format=json" parameter.
			if (requestOptions?.format_json !== undefined) {
				if (requestOptions.format_json) {
					request.params._format = "json";
				}
			}
		}

		return request;
	}

	protected static async _get<T>({
		endpoint,
		requestOptions,
		config
	}: GETRequestArguments): Promise<AxiosResponse<T>> {
		return await this.request<T>({
			method: RequestMethods.GET,
			endpoint: endpoint,
			config: config,
			requestOptions: requestOptions
		});
	}

	protected static async _post<T>({
		endpoint,
		requestOptions,
		config,
		data
	}: POSTRequestArguments): Promise<AxiosResponse<T>> {
		return await this.request<T>({
			method: RequestMethods.POST,
			endpoint: endpoint,
			data: data,
			config: config,
			requestOptions: requestOptions
		});
	}
}

export default Base;
