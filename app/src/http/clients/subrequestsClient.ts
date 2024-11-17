import Base from "@http/base";
import { SubrequestsResponse } from "@interfaces/api/response";
import { AxiosResponse } from "axios";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

abstract class SubrequestsClient extends Base {
  public static async getPostsAndAllTags(): Promise<
    AxiosResponse<SubrequestsResponse>
  > {
    return await this._post<SubrequestsResponse>("/subrequests", {}, [
      {
        requestId: "requestPosts",
        uri: `/api/index/posts?include=tags&page[limit]=${pageLimit}&jsonapi_include=1,`,
        action: "view",
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      },
      {
        requestId: "requestTags",
        uri: "/api/taxonomy_term/tags?jsonapi_include=1",
        action: "view",
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      }
    ]);
  }
}

export default SubrequestsClient;
