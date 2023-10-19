import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageCourse } from "services";
import { getUserInfoThunk } from "store/manageUser/thunk";
import { EnrollCourseType } from "types/Course";

export const manageCourseThunk = createAsyncThunk(
  "CourseManagement/manageCourseThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await manageCourse.getCourseList();
      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getCourseInfoThunk = createAsyncThunk(
  "CourseManagement/getCourseInfoThunk",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await manageCourse.getInfoCourse(payload);
      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getCourseFollowMenu = createAsyncThunk(
  "CourseManagement/getCourseFollowMenu",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await manageCourse.getCourseFollowMenu(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getCoursePagiThunk = createAsyncThunk(
  "CourseManagement/getCoursePagi",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await manageCourse.getCoursePagination(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const enrollCourseThunk = createAsyncThunk(
  "CourseManagement/enrollCourse",
  async (payload: EnrollCourseType, { rejectWithValue, dispatch }) => {
    try {
      await manageCourse.enrollCourse(payload);
      dispatch(getUserInfoThunk());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const cancelEnrollThunk = createAsyncThunk(
  "CourseManagement/cancelEnroll",
  async (payload: any, { rejectWithValue, dispatch }) => {
    try {
      await manageCourse.cancelEnroll(payload);
      dispatch(getUserInfoThunk());
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const authorCourseThunk = createAsyncThunk(
  "CourseManagement/authorCourseThunk",
  async (payload: EnrollCourseType, { rejectWithValue }) => {
    try {
      await manageCourse.authorCourse(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

