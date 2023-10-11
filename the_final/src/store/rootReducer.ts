import {combineReducers} from '@reduxjs/toolkit'
import { manageUserReducer } from './manageUser/slice'
export const rootReducer = combineReducers({
    manageUser:manageUserReducer,

})import { combineReducers } from "@reduxjs/toolkit";
import { manageCourseReducer } from "./CourseManagement/slice";

export const rootReducer = combineReducers({
    manageCourse: manageCourseReducer,
})