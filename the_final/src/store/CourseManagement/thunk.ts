import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageCourse } from "services";

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
export const getCourseFollowMenu = createAsyncThunk("CourseManagement/getCourseFollowMenu", async (payload:string,{rejectWithValue})=>{
  try {
    const data = await manageCourse.getCourseFollowMenu(payload);
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const getCoursePagiThunk = createAsyncThunk("CourseManagement/getCoursePagi",async(payload:number,{rejectWithValue})=>{
  try {
    const data = await manageCourse.getCoursePagination(payload);
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
  

})
