import { createSlice } from "@reduxjs/toolkit"
const intialState = {
    token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")): null,
    loading:false,
    signupData:null,
    formType:"login",
    showAuthModal:false,
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
        },
        setShowAuthModal(state, value){
            state.showAuthModal = value.payload
        }
    }
})

export const {setSignUpData, setLoading, setToken, setFromType, setShowAuthModal} = authSlice.actions 

export default authSlice.reducer