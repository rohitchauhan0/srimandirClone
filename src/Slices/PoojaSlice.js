import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    pooja:null
}

const poojaSlice = createSlice({
    name:"pooja",
    initialState:initialState,
    reducers:{
        setSteps(state, value){
            state.step= value.payload
        },
        setPooja(state, value){
            state.pooja= value.payload
        },
    }
})

export const {setSteps, setPooja} = poojaSlice.actions
export default poojaSlice.reducer