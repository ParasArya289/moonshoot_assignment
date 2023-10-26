import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMail = createAsyncThunk("mails/fetchMail", async () => {
  const response = await axios.get("https://flipkart-email-mock.now.sh/");
  return response.data.list;
});

const initialState = {
  status: "idle",
  error: null,
  mails: [],
};

export const mailSlice = createSlice({
  name: "mails",
  initialState,
  reducers: {
    likeButtonPressed: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.postID === action.payload
      );
      if (postIndex !== -1) {
        state.posts[postIndex].likes += 1;
      }
    },
  },
  extraReducers: {
    [fetchMail.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMail.fulfilled]: (state, action) => {
      state.status = "success";
        state.mails = action.payload;
    },
    [fetchMail.rejected]: (state, action) => {
      state.status = "error";
        state.error = action.error.message;
    },
  },
});
export const { likeButtonPressed } = mailSlice.actions;
export default mailSlice.reducer;
