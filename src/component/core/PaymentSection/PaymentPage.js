import React, { useEffect, useState } from "react";
import { itemEndPoints, packageEnPoints, pujaEndPoints } from "../../../Services/AllApi";
import { apiConnector } from "../../../Services/ApiConnector";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { bookPuja } from "../../../Services/Operations/PaymentOperation";
import toast from "react-hot-toast";
import CouponModal from "./CouponModal";
import { FcApproval } from "react-icons/fc";
import { setDiscountMoney } from "../../../Slices/CoupneSlice";

const PaymentPage = () => {
  const { poojaId } = useParams();
  const { packageId } = useParams();
  const { GET_PUJA_BY_ID_API } = pujaEndPoints;
  const { GET_PACKAGE_BY_ID_API } = packageEnPoints;
  const [poojadetail, setpoojadetail] = useState("");
  const [packageDetails, setpackageDetails] = useState("");
  const {user} = useSelector((state)=> state.profile)
  const {GET_ALL_ITEM_API} = itemEndPoints
  const [itemDetails, setitemDetails] = useState([])
  const [addeditems, setaddeditems] = useState([])
  const {token} = useSelector((state)=> state.auth)
  const [offeringItems, setofferingItems] = useState([])
  const [coupneModal, setcoupneModal] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {discountMoney}= useSelector((state)=> state.coupne)
  useEffect(() => {
   const getAllItem = async()=>{
      try {
          const response = await apiConnector("GET", GET_ALL_ITEM_API)
          setitemDetails(response.data.data)

          
      } catch (error) {
          console.log(error)
      }
   }
   getAllItem()
  }, [])
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await apiConnector("POST", GET_PUJA_BY_ID_API, {
          poojaId,
        });
        setpoojadetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [poojaId]);
  

  useEffect(() => {
    const getPackageDetails = async () => {
      try {
        const response = await apiConnector("POST", GET_PACKAGE_BY_ID_API, {
          packageId,
        });
        setpackageDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPackageDetails();
  }, [packageId]);

  const handleAdd = (id, title, price) => {
    if (addeditems.length === 0) {
      setaddeditems([{ id, title,price }]);
      setofferingItems([id])
    } else {
      setaddeditems([...addeditems, { id, title,price }]);
      setofferingItems([...offeringItems,id])

    }
    toast.success("Item added")
  };
  const handleremove = (index) => {
    const updatedItems = addeditems.filter((_, i) => i !== index);
    const updatedItemsId = offeringItems.filter((_, i) => i !== index);
    setaddeditems(updatedItems);
    setofferingItems(updatedItemsId)
    toast.success("Item removed")

  };

  const totalPrice = addeditems.reduce((total, detail) => total + detail.price, 0) + (packageDetails.price-discountMoney);
  const paymentHandler = ()=>{
    if(token !== null && user.accountType === "User"){
    bookPuja(token, poojaId, packageId,offeringItems, navigate, dispatch, totalPrice, user )
    }
    else{
      toast.error("Admin cann't book pooja")
    }
  }



  return (
   <>
     <div className=" w-full min-h-screen max-w-screen-xl mx-auto pt-20 flex flex-col gap-3">
      <h1 className=" text-2xl font-bold">Review Booking</h1>
      <hr className=" w-full h-[1px] bg-gray-500" />
      <div className=" flex lg:flex-row flex-col-reverse gap-10 mt-10 h-full">
        <div className=" lg:w-[40%] flex flex-col gap-5 pb-20">
          <div className=" flex flex-col gap-2 p-3 border border-gray-400 rounded-xl bg-gray-50">
            <h2 className=" text-2xl font-bold">{poojadetail.title}</h2>
            <p className=" text-xl font-semibold text-gray-500">
              {packageDetails.title}
            </p>
            <p className=" font-bold text-orange-500">₹ {packageDetails.price}</p>
          </div>
          <div className=" flex flex-col gap-2 p-3 border border-gray-400 rounded-xl bg-gray-50">
               {
                discountMoney === 0 ? ( <div className=" flex justify-between items-center w-full text-cyan-500 cursor-pointer" onClick={()=>{
                  setcoupneModal({
                    cancelHandler:()=>{
                      setcoupneModal(null)
                    }
                  })
                }}>
                    <p>Apply Coupon</p>
                    <IoIosArrowForward  />
                </div>) :(<div className=" flex justify-between w-full items-center">
                 
                  <p className=" flex items-center gap-2">Coupon applied
                  <FcApproval /></p>

                  <p className=" cursor-pointer text-red-500" onClick={()=>{
                    dispatch(setDiscountMoney(0))
                  }}>Cancel</p>
                </div>)
               }
          </div>
          <div className=" flex flex-col gap-2 p-3 border border-gray-400 rounded-xl bg-gray-50 text-[12px]">
                <p>{user?.fullName}</p>
                <p>{user?.phoneNum} (Your whatsapp number)</p>
          </div> 
          <div className=" flex flex-col gap-2 p-3 text-[12px]">
                <h2 className=" text-xl font-bold">Bill details</h2>
                <p>{user?.phoneNum} (Your whatsapp number)</p>
                <div className=" flex justify-between">
                <p className=" text-xl font-semibold text-gray-500">
              {packageDetails.title}
            </p>
            <p className=" font-bold text-lg text-orange-500">₹ {packageDetails.price}</p>
                </div>
                <hr className=" h-[2px] bg-gray-500 w-full" />
          </div>


            {
                addeditems.length > 0 && (<div className=" flex flex-col p-2 gap-4">
                    {
                       addeditems.map((data, index)=>{
                        return <div className=" flex items-center justify-between" key={index}>
                            <p className=" font-bold">{data.title?.slice(0, 30)}...</p>
                            <p className=" text-green-600">₹ {data.price}</p>
                            <RxCross2 className=" cursor-pointer hover:text-red-500" onClick={()=> handleremove(index)}  />
                        </div>
                       })
                    }
                </div>)
            }
            <button className=" w-full py-2 bg-green-600 rounded-xl font-bold text-white"
            onClick={()=> paymentHandler()}
            >
              Book now ₹ {totalPrice}
            </button>
        </div>
       
       <div className=" lg:w-[40%] flex flex-col gap-5">
        <h1 className=" text-2xl font-bold">Add more offering items</h1>
        <div className=" flex flex-col gap-6">
            {
                itemDetails.map((data, index)=>{
                    return <div className=" p-3 border border-gray-500 rounded-xl flex justify-between" key={index}>
                        <div className=" flex flex-col justify-between h-full">
                            <p className=" font-bold">{data.title}</p>
                            <p >{data.description?.slice(0, 50)}...</p>
                            <p className=" text-green-500">₹ {data.price}</p>
                        </div>
                        <div className=" relative">
                            <img src={data.icon} alt="" className=" w-[150px] h-[100px] object-cover" />
                            <button className=" flex items-center p-2 bg-green-500 rounded-xl text-white gap-3 absolute -bottom-2 left-5"
                            onClick={()=> handleAdd(data._id, data.title, data.price)}
                            >Add <FaPlus /></button>
                        </div>
                    </div>
                })
            }
        </div>
       </div>
      </div>
    </div>
    {
      coupneModal && <CouponModal cancelHandler={coupneModal.cancelHandler} totalMoney={ packageDetails.price}/>
    }
   </>
  );
};

export default PaymentPage;
