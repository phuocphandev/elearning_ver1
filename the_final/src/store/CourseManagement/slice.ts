import { createSlice } from "@reduxjs/toolkit";
import { getCourseInfoThunk, manageCourseThunk } from "./thunk";
import { CourseType } from "types/Course";

type manageCourseInitialState={
    CourseList?:CourseType[],
    CourseInfo?:CourseType,
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
    }
})

export const {reducer: manageCourseReducer,actions: manageCourseActions} = manageCourse;