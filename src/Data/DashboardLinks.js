import { ACCOUNT_TYPE } from "../Utils/Constants";

export const DASHBOARD_LINK = [
    {
        id:1,
        title:"My Profile",
        path:"/dashboard/my-profile",
        icon: "VscAccount",
    },
    {
        id:2,
        title:"Create puja",
        path:"/dashboard/create-puja",
        accountType: ACCOUNT_TYPE.ADMIN
    },{
        id:3,
        title:"Create package",
        path:"/dashboard/create-package",
        accountType: ACCOUNT_TYPE.ADMIN

    },
    {
        id:8,
        title:"My package",
        path:"/dashboard/my-package",
        accountType: ACCOUNT_TYPE.ADMIN

    },
    {
        id:4,
        title:"My pooja",
        path:"/dashboard/my-pooja",
        accountType: ACCOUNT_TYPE.ADMIN

    },
    {
        id:5,
        title:"Create benefits",
        path:"/dashboard/create-benifits",
        accountType: ACCOUNT_TYPE.ADMIN
    },{
        id:10,
        title:"My benefits",
        path:"/dashboard/my-benifits",
        accountType: ACCOUNT_TYPE.ADMIN
    },
    {
        id:6,
        title:"Offering items",
    path:"/dashboard/offering-items",
        accountType: ACCOUNT_TYPE.ADMIN
    },
    {
        id:9,
        title:"My items",
    path:"/dashboard/my-items",
        accountType: ACCOUNT_TYPE.ADMIN
    },
    {
        id:7,
        title:"Enrolled user",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/Enrolled-user",
    },
    {
        id:11,
        title:"Booked pooja",
        accountType: ACCOUNT_TYPE.USER,
    path:"/dashboard/booked-pooja",
    },
    {
        id:12,
        title:"Create library",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/create-library",
    }, 
    {
        id:13,
        title:"Library content",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/library-content",
    }, 
    {
        id:14,
        title:"Create section",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/create-section",
    },
    {
        id:15,
        title:"Create review",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/create-review",
    },
    {
        id:16,
        title:"Create coupon",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/create-Coupon",
    },
    {
        id:17,
        title:"All coupon",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/all-Coupon",
    },
    

]