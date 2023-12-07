import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
