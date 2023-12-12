import { configureStore } from "@reduxjs/toolkit";

import { postApiSlice } from "./api/postApiSlice";
import { userApiSlice } from "./api/userApiSlice";
import postSlice from "./features/post/postSlice";

export const store = configureStore({
  reducer: {
    userPost: postSlice,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postApiSlice.middleware,
      userApiSlice.middleware
    ),
});
