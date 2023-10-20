import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { manageUser } from "services/manageUser";
import { UpdateUser, payloadFilter } from "types";

export const loginThunk = createAsyncThunk(
  "manageUser/loginThunk",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = await manageUser.login(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getUserInfoThunk = createAsyncThunk(
  "manageUser/getUserThunk",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("USER");
      if (accessToken) {
        const data = await manageUser.getUserInfo();
        return data.data;
      }
      return undefined;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateUserThunk = createAsyncThunk(
  "manageUser/updateUserThunk",
  async (payload: UpdateUser, { rejectWithValue, dispatch }) => {
    try {
      await manageUser.updateUser(payload);
      dispatch(getUserInfoThunk());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAccountThunk = createAsyncThunk(
  "manageUser/getAccountThunk",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await manageUser.getAccount(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAccountFilterThunk = createAsyncThunk(
  "manageUser/getAccountFilterThunk",
  async (payload: payloadFilter, { rejectWithValue }) => {
    try {
      const data = await manageUser.filterAccount(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteAccountThunk = createAsyncThunk(
  "manageUser/deleteAccountThunk",
  async (payload: string, { rejectWithValue }) => {
    try {
      await manageUser.deleteAccount(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getCourseNotEnrollThunk = createAsyncThunk(
  "manageUser/getCourseNotEnroll",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await manageUser.getCourseNotEnroll(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCourseUnAuthorThunk = createAsyncThunk(
  "manageUser/getCourseUnAuthorThunk",
  async (payload: { taiKhoan: string }, { rejectWithValue }) => {
    try {
      const data = await manageUser.getCourseUnAuthor(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getCourseAuthorThunk = createAsyncThunk(
  "manageUser/getCourseAuthorThunk",
  async (payload: { taiKhoan: string }, { rejectWithValue }) => {
    try {
      const data = await manageUser.getCourseAuthor(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserNotEnrollThunk = createAsyncThunk(
  "manageUser/getUserNotEnrollThunk",
  async (payload: { maKhoaHoc: string }, { rejectWithValue }) => {
    try {
      const data = await manageUser.getUserNotEnroll(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getUserUnAuthorThunk = createAsyncThunk(
  "manageUser/getUserUnAuthorThunk",
  async (payload: { maKhoaHoc: string }, { rejectWithValue }) => {
    try {
      const data = await manageUser.getUserUnAuthor(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserAuthorThunk = createAsyncThunk(
  "manageUser/getUserAuthorThunk",
  async (payload: { maKhoaHoc: string }, { rejectWithValue }) => {
    try {
      const data = await manageUser.getUserAuthor(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
