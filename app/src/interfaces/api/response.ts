export interface JsonApiResponse<T> {
  data: T;
  meta: {
    count: number;
  };
}
