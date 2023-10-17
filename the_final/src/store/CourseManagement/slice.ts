import { createSlice } from "@reduxjs/toolkit";
import {
  getCourseFollowMenu,
  getCourseInfoThunk,
  getCoursePagiThunk,
  manageCourseThunk,
  cancelEnrollThunk,
} from "./thunk";
import { CoursePagi, CourseType } from "types/Course";

type manageCourseInitialState = {
  CourseList?: CourseType[];
  CourseInfo?: CourseType;
  CourseListPagi?: CoursePagi;
  isDelete ?: boolean;

};

const initialState: manageCourseInitialState = {
  isDelete : false,
};

export const manageCourse = createSlice({
  name: "manageCourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(manageCourseThunk.fulfilled, (state, { payload }) => {
      state.CourseList = payload;
    });
    builder.addCase(getCourseInfoThunk.fulfilled, (state, { payload }) => {
      state.CourseInfo = payload;
    });
    builder.addCase(getCourseFollowMenu.fulfilled, (state, { payload }) => {
      state.CourseList = payload;
    });
    builder.addCase(getCoursePagiThunk.fulfilled, (state, { payload }) => {
      state.CourseListPagi = payload;
    });
    builder.addCase(cancelEnrollThunk.pending,(state)=>{
      state.isDelete = true;
    });
    builder.addCase(cancelEnrollThunk.fulfilled,(state)=>{
      state.isDelete = false;
    });
    builder.addCase(cancelEnrollThunk.rejected,(state)=>{
      state.isDelete = false;
    })
  },
});

export const { reducer: manageCourseReducer, actions: manageCourseActions } =
  manageCourse;
