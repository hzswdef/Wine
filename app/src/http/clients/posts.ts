import Base from "@http/base";
import { JsonApiResponse } from "@interfaces/api/response";
import Post from "@interfaces/post/post";
import { AxiosResponse } from "axios";

abstract class Posts extends Base {
  public static async getPost(
    id: string,
  ): Promise<AxiosResponse<JsonApiResponse<Post>>> {
    return await this._get<Post>(`/api/post/${id}`);
  }
}

export default Posts;
