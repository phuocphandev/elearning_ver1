import { createSlice } from "@reduxjs/toolkit";
import { getCourseFollowMenu, getCourseInfoThunk, getCoursePagiThunk, manageCourseThunk } from "./thunk";
import { CoursePagi, CourseType } from "types/Course";

type manageCourseInitialState={
    CourseList?:CourseType[],
    CourseInfo?:CourseType,
    CourseListPagi?:CoursePagi,
}

const initialState:manageCourseInitialState={
    
}

export const manageCourse = createSlice({
    name:"manageCourse",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(manageCourseThunk.fulfilled, (state, {payload} )=>{
            state.CourseList=payload;
            
        } )
        builder.addCase(getCourseInfoThunk.fulfilled, (state, {payload}) =>{
            state.CourseInfo= payload;
        } )
        builder.addCase(getCourseFollowMenu.fulfilled,(state,{payload})=>{
            state.CourseList = payload;

        })
        builder.addCase(getCoursePagiThunk.fulfilled,(state,{payload})=>{
            state.CourseListPagi = payload;
        })
        
    }
})

export const {reducer: manageCourseReducer,actions: manageCourseActions} = manageCourse;