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
        RESET_PASSWORD_TOKEN_API : BASE_URL + "/auth/resetPasswordToken",
        RESET_PASSWORD_API : BASE_URL + "/auth/resetPassword",
        CONTACT_US_API : BASE_URL + "/auth/contactUs",
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
        GET_PACKAGE_BY_ID_API : BASE_URL + "/package/getPackageById",
}


export const itemEndPoints = {
        CREATE_ITEM_API : BASE_URL + "/item/createItem",
        GET_ALL_ITEM_API : BASE_URL + "/item/getItem",
        DELTE_ITEM_API : BASE_URL + "/item/deleteItem",
}

export const paymentEndPoint = {
        CREATE_PAYMENT_API : BASE_URL + "/payment/capturePayment",
        VERIFY_PAYMENT_API : BASE_URL + "/payment/verifyPayment",
        GET_ALL_PAYMENT_API : BASE_URL + "/payment/paymentDetail",


        CREATE_COUPNE_API : BASE_URL + "/payment/createCoupne",
        GET_COUPNE_API : BASE_URL + "/payment/getCoupne",
        DELETE_COUPNE_API : BASE_URL + "/payment/deleteCoupne",

}


export const sectionEndPoint = {
        GET_SECTION_NAME_API : BASE_URL + "/section/getSectionName",
        GET_SECTION_BY_NAME_API : BASE_URL + "/section/getSectionByName",
        GET_FULL_SECTION_API : BASE_URL + "/section/getFullSection",
        CREATE_SECTION_API : BASE_URL + "/section/createSection",
}

export const subsectionEndPoint = {
        CREATE_ARTI_API : BASE_URL + "/subsection/createArti",
        CREATE_CHALIS_API : BASE_URL + "/subsection/createChalisa",
        CREATE_MANTRA_API : BASE_URL + "/subsection/createMantra",
        GET_SUBSECTION_BY_ID_API : BASE_URL + "/subsection/getSubsectionById",
        GET_FULL_SUBSECTION_API : BASE_URL + "/subsection/getFullSubSection",
        DELETE_SUBSECTION_API : BASE_URL + "/subsection/deleteSubSection",
        CREATE_BLOG_API : BASE_URL + "/subsection/createBlogSection",
}

export const reviewEndPoint = {
        CREATE_REVIEW_API : BASE_URL + "/review/createReview",
        GET_ALL_REVIEW_API : BASE_URL + "/review/getReview",
}

export const templeEndPoint = {
        CREATE_TEMPLE_LOCATION_API : BASE_URL + "/temple/createLoc",
        CREATE_TEMPLE_DETAILS_API : BASE_URL + "/temple/createTempleDetail",
        GET_ALL_TEMPLE_API : BASE_URL + "/temple/getTemple",
        GET_TEMPLE_BY_ID_API : BASE_URL + "/temple/getTempleById",
        GET_TEMPLE_BY_LOC_API : BASE_URL + "/temple/getTempleByLocId",
}


export const astrologyEndPoint = {
        CREATE_FORM_API : BASE_URL + "/astrology/createForm",
        GET_FORM_API : BASE_URL + "/astrology/getForm",
        DELETE_FORM_API : BASE_URL + "/astrology/deleteForm",

}

