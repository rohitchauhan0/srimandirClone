import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice"
import profileReducer from "../Slices/ProfileSlice"
import poojaReducer from "../Slices/PoojaSlice"


export const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    pooja:poojaReducer
})