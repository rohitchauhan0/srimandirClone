// const BASE_URL = "http://localhost:4000/api/v1"
const BASE_URL = "https://srimandir.onrender.com/api/v1"

export const authEndPoints = {
        SIGNUP_API : BASE_URL + "/auth/signup",
        LOGIN_API : BASE_URL + "/auth/login",
        SEND_OTP_API : BASE_URL + "/auth/sendotp",
        GET_USER_BY_ID_API : BASE_URL + "/auth/getUserById",
        UPDATE_IMAGE_ID_API : BASE_URL + "/auth/updateImage",
        UPDATE_PHONE_NUM_ID_API : BASE_URL + "/auth/updatePhoneNum",
        CHANGE_PASSWORD_API : BASE_URL + "/auth/changePassword",
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
        DELETE_BENEFITS_API : BASE_URL + "/puja/deleteBenefits",
}

export const packageEnPoints = {
        CREATE_PACKAGE_API : BASE_URL + "/package/createPackage",
        GET_ALL_PACKAGE_API : BASE_URL + "/package/getAllPackage",
        DELTE_PACKAGE_API : BASE_URL + "/package/deletePackage",
}


export const itemEndPoints = {
        CREATE_ITEM_API : BASE_URL + "/item/createItem",
        GET_ALL_ITEM_API : BASE_URL + "/item/getItem",
        DELTE_ITEM_API : BASE_URL + "/item/deleteItem",
}