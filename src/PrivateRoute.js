import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { setShowAuthModal } from "./Slices/AuthSlice"

export const PrivateRoute = ({children})=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.auth)
    if(token!== null){
        return children
    }
    else{
        dispatch(setShowAuthModal(true))
        return <Navigate to={"/"}/>
    }
}