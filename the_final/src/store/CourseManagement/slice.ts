import { createSlice } from "@reduxjs/toolkit";
import {
  getCourseFollowMenu,
  getCourseInfoThunk,
  getCoursePagiThunk,
  manageCourseThunk,
  cancelEnrollThunk,
  getCourseFilterThunk,
  deleteCourseThunk,
} from "./thunk";
import { CoursePagi, CourseType } from "types/Course";

type manageCourseInitialState = {
  CourseList?: CourseType[];
  CourseInfo?: CourseType;
  CourseListPagi?: CoursePagi;
  isDelete?: boolean;
};

const initialState: manageCourseInitialState = {
  isDelete: false,
};

export const manageCourse = createSlice({
  name: "manageCourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(manageCourseThunk.fulfilled, (state, { payload }) => {
        state.CourseList = payload;
      })
      .addCase(getCourseInfoThunk.fulfilled, (state, { payload }) => {
        state.CourseInfo = payload;
      })
      .addCase(getCourseFollowMenu.fulfilled, (state, { payload }) => {
        state.CourseList = payload;
      })
      .addCase(getCoursePagiThunk.fulfilled, (state, { payload }) => {
        state.CourseListPagi = payload;
      })
      .addCase(cancelEnrollThunk.pending, (state) => {
        state.isDelete = true;
      })
      .addCase(cancelEnrollThunk.fulfilled, (state) => {
        state.isDelete = false;
      })
      .addCase(cancelEnrollThunk.rejected, (state) => {
        state.isDelete = false;
      })
      .addCase(getCourseFilterThunk.fulfilled, (state, { payload }) => {
        state.CourseListPagi = payload;
      })
      .addCase(deleteCourseThunk.pending, (state) => {
        state.isDelete = true;
      })
      .addCase(deleteCourseThunk.fulfilled, (state) => {
        state.isDelete = false;
      })
      .addCase(deleteCourseThunk.rejected, (state) => {
        state.isDelete = false;
      });
  },
});

export const { reducer: manageCourseReducer, actions: manageCourseActions } =
  manageCourse;
