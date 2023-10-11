import { combineReducers } from "@reduxjs/toolkit";
import { manageCourseReducer } from "./CourseManagement/slice";

export const rootReducer = combineReducers({
    manageCourse: manageCourseReducer,
})