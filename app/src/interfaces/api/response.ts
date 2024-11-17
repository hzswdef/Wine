export interface JsonApiResponse<T> {
  data: T;
  meta: {
    count: number;
  };
}

export interface SubrequestsResponse {
  [key: string]: {
    headers: {
      [key: string]: string[];
      status: string[];
    };
    body: string;
  };
}
