import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "user-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1/" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/user`,
      providesTags: ["comments"],
    }),
  }),
});

export const { useGetUserQuery } = userApiSlice;
