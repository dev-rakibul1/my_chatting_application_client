import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApiSlice = createApi({
  reducerPath: "post-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1/" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    getPostApi: builder.query({
      query: () => "/post",
      providesTags: ["comments"],
    }),

    // post or create comment
    postComment: builder.mutation({
      query: (data) => ({
        url: `/comment/create-comment/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    // get commet
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),

    // Reply comment
    replyComment: builder.mutation({
      query: (data) => ({
        url: `/reply/create-reply-comment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    // get commet
    getReplyComment: builder.query({
      query: (id) => `/reply/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetPostApiQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useReplyCommentMutation,
  useGetReplyCommentQuery,
} = postApiSlice;
