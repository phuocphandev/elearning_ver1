import { createSlice } from "@reduxjs/toolkit";
import { LoginUser, UserInfo, getAccount } from "types";
import {
  deleteAccountThunk,
  getAccountFilterThunk,
  getAccountThunk,
  getCourseAuthorThunk,
  getCourseNotEnrollThunk,
  getCourseUnAuthorThunk,
  getUserInfoThunk,
  loginThunk,
  getUserNotEnrollThunk,
  getUserUnAuthorThunk,
  getUserAuthorThunk,
} from "./thunk";
import { CourseNotEnroll, UserNotEnroll } from "types/Course";

type manageUser = {
  user?: LoginUser | UserInfo;
  accessToken?: string;
  AllAccount?: getAccount;
  isDelete?: boolean;
  CourseNotEnroll?: CourseNotEnroll[];
  CourseNotAuthor?: CourseNotEnroll[];
  CourseAuthor?: CourseNotEnroll[];
  UserNotEnroll?: UserNotEnroll[];
  UserNotAuthor?: UserNotEnroll[];
  UserAuthor?: UserNotEnroll[];
  isPending?: boolean;
};
const initialState: manageUser = {
  user: undefined,
  accessToken: localStorage.getItem("USER"),
  isDelete: false,
  CourseNotEnroll: [],
  CourseNotAuthor: [],
  CourseAuthor: [],
  UserAuthor:[],
};
export const manageUserSlice = createSlice({
  name: "manageUser",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("USER");
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.accessToken = payload.accessToken;
        localStorage.setItem("USER", payload.accessToken);
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(getAccountThunk.fulfilled, (state, { payload }) => {
        state.AllAccount = payload;
      })
      .addCase(getAccountFilterThunk.fulfilled, (state, { payload }) => {
        state.AllAccount = payload;
      })
      .addCase(deleteAccountThunk.pending, (state) => {
        state.isDelete = true;
      })
      .addCase(deleteAccountThunk.fulfilled, (state) => {
        state.isDelete = false;
      })
      .addCase(deleteAccountThunk.rejected, (state) => {
        state.isDelete = false;
      })
      .addCase(getCourseNotEnrollThunk.fulfilled, (state, { payload }) => {
        state.CourseNotEnroll = payload;
      })
      .addCase(getCourseUnAuthorThunk.fulfilled, (state, { payload }) => {
        state.CourseNotAuthor = payload;
      })
      .addCase(getCourseAuthorThunk.fulfilled, (state, { payload }) => {
        state.CourseAuthor = payload;
      })
      .addCase(getUserNotEnrollThunk.fulfilled, (state, { payload }) => {
        state.UserNotEnroll = payload;
      })
      .addCase(getUserUnAuthorThunk.fulfilled, (state, { payload }) => {
        state.UserNotAuthor = payload;
      })
      .addCase(getUserAuthorThunk.fulfilled, (state, { payload }) => {
        state.UserAuthor = payload;
      });
  },
});
export const { reducer: manageUserReducer, actions: manageUserActions } =
  manageUserSlice;
