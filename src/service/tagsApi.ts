import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RelatedPost, Response } from "@/interfaces";

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
    getRelatedPosts: build.query<RelatedPost[], string>({
      query: (tagName) => ({
        url: `tags/${tagName}/faq`,
        params: {
          site: "stackoverflow",
        },
      }),
    }),
  }),
});

export const { useGetTagsQuery, useGetRelatedPostsQuery } = tagsApi;

export const { endpoints, reducerPath, reducer, middleware } = tagsApi;
