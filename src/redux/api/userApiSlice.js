import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "user-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1/" }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/user`,
      providesTags: ["users"],
    }),

    // create user
    userCreate: builder.mutation({
      query: (data) => ({
        url: `/user/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // login user
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/auth/login/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery, useUserCreateMutation, useLoginUserMutation } =
  userApiSlice;
