import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { manageUser } from "services/manageUser";
import { UpdateUser } from "types";

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
