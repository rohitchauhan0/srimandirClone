import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice"
import profileReducer from "../Slices/ProfileSlice"


export const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer
})