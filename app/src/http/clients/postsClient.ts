import Base from "@http/base";
import { JsonApiResponse } from "@interfaces/api/response";
import Post from "@interfaces/post/post";
import { AxiosResponse } from "axios";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

abstract class PostsClient extends Base {
	public static async getPost(
		id: string
	): Promise<AxiosResponse<JsonApiResponse<Post>>> {
		return await this._get<JsonApiResponse<Post>>({
			endpoint: `/api/post/${id}`,
			requestOptions: {
				jsonapi_include: true
			}
		});
	}

	public static async getPostsByTag(
		tagName: string,
		offset: number = 0
	): Promise<AxiosResponse<JsonApiResponse<Post[]>>> {
		return await this._get<JsonApiResponse<Post[]>>({
			endpoint: "/api/post",
			requestOptions: {
				jsonapi_include: true
			},
			config: {
				params: {
					include: "tags",
					"filter[tags.name][value]": tagName,
					"page[limit]": pageLimit,
					"page[offset]": offset
				}
			}
		});
	}

	public static async searchPosts(
		offset: number = 0,
		params: object
	): Promise<AxiosResponse<JsonApiResponse<Post[]>>> {
		return await this._get<JsonApiResponse<Post[]>>({
			endpoint: "/api/index/posts",
			requestOptions: {
				jsonapi_include: true
			},
			config: {
				params: {
					...params,
					"page[limit]": pageLimit,
					"page[offset]": offset,
					include: "tags"
				}
			}
		});
	}
}

export default PostsClient;
