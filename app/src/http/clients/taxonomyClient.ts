import Base from "@http/base";
import { JsonApiResponse } from "@interfaces/api/response";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import { AxiosResponse } from "axios";

abstract class TaxonomyClient extends Base {
	public static async getTags(): Promise<
		AxiosResponse<JsonApiResponse<TagsTaxonomy>>
	> {
		return await this._get<JsonApiResponse<TagsTaxonomy>>({
			endpoint: "/api/taxonomy_term/tags",
			requestOptions: {
				jsonapi_include: true
			}
		});
	}
}

export default TaxonomyClient;
