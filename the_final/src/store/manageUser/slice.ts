import { createSlice } from "@reduxjs/toolkit";
import { LoginUser, UserInfo, getAccount } from "types";
import { getAccountThunk, getUserInfoThunk, loginThunk } from "./thunk";

type manageUser = {
  user?: LoginUser | UserInfo;
  accessToken?: string;
  AllAccount?: getAccount;
  
};
const initialState: manageUser = {
  user: undefined,
  accessToken: localStorage.getItem("USER"),
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
        state.user=payload;
        state.accessToken = payload.accessToken;
        localStorage.setItem("USER", payload.accessToken);
      })
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(getAccountThunk.fulfilled, (state, {payload}) => {
        state.AllAccount = payload;
      })
  },
});
export const { reducer: manageUserReducer, actions: manageUserActions } =
  manageUserSlice;
