import { createSlice } from "@reduxjs/toolkit"
const intialState = {
    token:localStorage.getItem("token")? JSON.parse(localStorage.getItem(("token"))): null,
    loading:false,
    signupData:null,
    formType:"login"
}

const authSlice = createSlice({
    name:"auth",
    initialState:intialState,
    reducers:{
        setToken(state, value){
            state.token = value.payload
        },
        setLoading(state, value){
            state.loading = value.payload
        },
        setSignUpData(state, value){
            state.signupData = value.payload
        },
        setFromType(state, value){
            state.formType = value.payload
        }
    }
})

export const {setSignUpData, setLoading, setToken, setFromType} = authSlice.actions 

export default authSlice.reducer