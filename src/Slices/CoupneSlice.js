import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    discountMoney : 0
}

const coupenSlice = createSlice({
    name:"coupne",
    initialState:initialState,
    reducers:{
        setDiscountMoney (state, value){
            state.discountMoney = value.payload
        }
    }
})

export const {setDiscountMoney} = coupenSlice.actions
export default coupenSlice.reducer