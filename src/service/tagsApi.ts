import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Response } from "@/interfaces";

const baseUrl = "https://api.stackexchange.com/2.3/";

export const tagsApi = createApi({
  reducerPath: "tagsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Tags"],
  endpoints: (build) => ({
    getTags: build.query<Response[], void>({
      query: () => ({
        url: "tags",
        params: {
          site: "stackoverflow",
        },
      }),
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;

export const { endpoints, reducerPath, reducer, middleware } = tagsApi;
