import {combineReducers} from '@reduxjs/toolkit'
import { manageUserReducer } from './manageUser/slice'
import { manageCourseReducer } from "./CourseManagement/slice";
export const rootReducer = combineReducers({
    manageUser:manageUserReducer,
    manageCourse: manageCourseReducer,
})



