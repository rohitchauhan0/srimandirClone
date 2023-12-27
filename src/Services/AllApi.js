const BASE_URL = "http://localhost:4000/api/v1"
// const BASE_URL = "https://srimandir.onrender.com/api/v1"

export const authEndPoints = {
        SIGNUP_API : BASE_URL + "/auth/signup",
        LOGIN_API : BASE_URL + "/auth/login",
        SEND_OTP_API : BASE_URL + "/auth/sendotp",
        GET_USER_BY_ID_API : BASE_URL + "/auth/getUserById",
}

export const pujaEndPoints = {
        CREATE_PUJA_API : BASE_URL + "/puja/createPuja",
        GET_ALL_PUJA_API : BASE_URL + "/puja/getAllPooja",
        GET_PUJA_BY_ID_API : BASE_URL + "/puja/getPoojaByid",
        DELETE_POOJA_API : BASE_URL + "/puja/deletePooja",
        EDIT_DATE_API : BASE_URL + "/puja/editDate",
}

export const benifitEndPoints = {
        CREATE_BENEFITS_API : BASE_URL + "/puja/createBenefits",
        GET_ALL_BENEFITS_API : BASE_URL + "/puja/getAllBenefits",
}
