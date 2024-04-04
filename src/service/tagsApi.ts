import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.stackexchange.com/2.3/";

const createRequest = (url: string) => ({ url });

export const tagsApi = createApi({
  reducerPath: "tagsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Tags"],
  endpoints: (build) => ({
    getTags: build.query({
      query: (page) =>
        createRequest(
          `/tags?page=${page + 1}&pagesize=40&order=desc&sort=popular&site=stackoverflow&filter=!21k7qaosV)V8y5XPlOTVE`
        ),
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;

export const { endpoints, reducerPath, reducer, middleware } = tagsApi;
