import {combineReducers} from '@reduxjs/toolkit'
import { manageUserReducer } from './manageUser/slice'
export const rootReducer = combineReducers({
    manageUser:manageUserReducer,

})