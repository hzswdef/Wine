import Base from "@http/base";
import { JsonApiResponse } from "@interfaces/api/response";
import { TagsTaxonomy } from "@interfaces/taxonomy";
import { AxiosResponse } from "axios";

abstract class Taxonomy extends Base {
  public static async getTags(): Promise<
    AxiosResponse<JsonApiResponse<TagsTaxonomy>>
  > {
    return await this._get<TagsTaxonomy>("/api/taxonomy_term/tags");
  }
}

export default Taxonomy;
