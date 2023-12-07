import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApiSlice = createApi({
  reducerPath: "post-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/api/v1/" }),
  endpoints: (builder) => ({
    getPostApi: builder.query({
      query: () => "/post",
    }),
  }),
});

export const { useGetPostApiQuery } = postApiSlice;
