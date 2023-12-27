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
    },
    {
        id:6,
        title:"Offering items",
    path:"/dashboard/offering-items",
        accountType: ACCOUNT_TYPE.ADMIN
    },
    {
        id:7,
        title:"Enrolled user",
        accountType: ACCOUNT_TYPE.ADMIN,
    path:"/dashboard/Enrolled-user",
    }

]