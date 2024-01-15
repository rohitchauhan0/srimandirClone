import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showForm:false,
    formData: null
}

const paymentslice = createSlice({
    name:"payment",
    initialState:initialState,
    reducers:{
        setShowFrom(state, value){
            state.showForm = value.payload
        },
        setFormData(state, value){
            state.formData = value.payload
        }
    }
})


export const {setFormData,setShowFrom} = paymentslice.actions

export default paymentslice.reducer
