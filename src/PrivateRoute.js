import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { setShowAuthModal } from "./Slices/AuthSlice"
const dispatch = useDispatch()

export const PrivateRoute = ({children})=>{
    const {token} = useSelector((state)=> state.auth)
    if(token!== null){
        return children
    }
    else{
        // toast.error("Please login to continue..")
        dispatch(setShowAuthModal(true))
        return <Navigate to={"/"}/>
    }
}