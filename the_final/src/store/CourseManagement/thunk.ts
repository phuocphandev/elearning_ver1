import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageCourse } from "services";

export const manageCourseThunk = createAsyncThunk(
  "CourseManagement/manageCourseThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await manageCourse.getCourseList();
      console.log("data: ", data.data.length);
      
      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
