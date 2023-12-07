import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/post/postSlice";
import { postApiSlice } from "./postApi/postApiSlice";

export const store = configureStore({
  reducer: {
    userPost: postSlice,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApiSlice.middleware),
});
