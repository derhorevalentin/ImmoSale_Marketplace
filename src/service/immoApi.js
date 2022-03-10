import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://127.0.0.1:3000/";

const createRequest = (url) => ({ url, baseUrl });

export const immoApi = createApi({
  reducerPath: "immoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => createRequest("/"),
    }),
  }),
});

export const { useGetArticlesQuery } = immoApi;
