import React, { useEffect, useState } from "react";
import logo from "../../Assets/img_sm_logo_en_dark.svg";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { NavLinks } from "../../Data/NavbarLink";
import {
  FaAngleDown,
  FaAngleRight,
  FaHandsPraying,
  FaMusic,
  FaUser,
} from "react-icons/fa6";
import Template from "../core/Auth/Template";
import { useDispatch, useSelector } from "react-redux";
import { apiConnector } from "../../Services/ApiConnector";
import { authEndPoints, sectionEndPoint } from "../../Services/AllApi";
import { MdDashboard, MdLibraryBooks } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { logout } from "../../Services/Operations/AuthOper";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaBook } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import callImage from "../../Assets/call.png"
import gmailImage from "../../Assets/gmail.png"
import whatsappIconImage from "../../Assets/whatsappIcon.png"

const Navbar = () => {
  const [showLibrary, setshowLibrary] = useState(true);
  const [modal, setmodal] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { GET_USER_BY_ID_API } = authEndPoints;
  const [userData, setuserData] = useState("");
  const naviagte = useNavigate();
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();
  const [showNavbar, setshowNavbar] = useState(false);
  const { GET_SECTION_NAME_API } = sectionEndPoint;
  const [sectionDetail, setsectionDetail] = useState([]);
  const [showMobileNavbar, setshowMobileNavbar] = useState(false);
  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const response = await apiConnector("POST", GET_USER_BY_ID_API, null, {
          Authorization: `Bearer ${token}`,
        });
        setuserData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    token !== null && getUserDetail();
  }, []);


  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  useEffect(() => {
    const sectionDetail = async () => {
      try {
        const response = await apiConnector("GET", GET_SECTION_NAME_API);
        setsectionDetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    sectionDetail();
  }, []);

  return (
    <>
      <div
        className={`fixed top-0  z-[1000] w-full  bg-white border-b-[1px] border-gray-200 `}
      >
        <div
          className={` flex items-center  flex-row  justify-between py-3  max-w-screen-xl mx-auto lg:px-0 px-5`}
        >
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>

          <div className={`hidden lg:block`}>
            <div
              className={`${
                showNavbar ? " flex-col space-y-6 " : "space-x-8 "
              } flex items-center  text-[17px]  font-semibold`}
            >
              {NavLinks.map((data) => {
                return (
                  <div>
                    {data.title === "Library" ? (
                      <div
                        className=" flex items-center gap-2 relative cursor-pointer"
                        onClick={() => setshowLibrary(!showLibrary)}
                      >
                        <p>Library</p>
                        <FaAngleDown />
                        <div
                          className={`${
                            showLibrary ? "hidden" : "visible"
                          } absolute bg-white rounded-xl p-3 lg:translate-y-[53%] lg:-translate-x-[30%] border-[1px] border-gray-400 lg:min-w-[500px] min-w-[300px] -translate-x-[30%] -translate-y-[55%] lg:h-[500px] z-[10000] transition-all duration-200 flex flex-col gap-2 lg:gap-5 `}
                        >
                          <div
                            className=" flex  gap-2 items-center text-gray-400 hover:bg-slate-50"
                            onClick={() => naviagte("/articles")}
                          >
                            <FaBook className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                            <div>
                              <h2 className=" text-orange-500">
                                Sanatan Sahitya
                              </h2>
                              <p>Read all Articles</p>
                            </div>
                          </div>
                          {sectionDetail?.slice(0, 6)?.map((data, index) => {
                            return (
                              <div
                                className=" flex  gap-2 items-center text-gray-400 hover:bg-slate-50"
                                key={index}
                                onClick={() =>
                                  naviagte(`/articles/${data.title}`)
                                }
                              >
                                {data.title === "Arti" ? (
                                  <FaHandsPraying className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Chalisa" ? (
                                  <FaBook className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Mantra" ? (
                                  <GiByzantinTemple className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Incarnations of gods and goddesses" ? (
                                  <FaMusic  className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                ): (
                                  <FaBook className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                )}

                                <div>
                                  <h2 className=" text-orange-500">
                                    {data.title}
                                  </h2>
                                  <p>{data.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <p
                        className={` ${
                          matchRoute(`${data.path}`)
                            ? " text-orange-500"
                            : " text-black"
                        } hover:text-orange-700 transition-all duration-200 cursor-pointer`}
                        key={data.id}
                        onClick={() => {
                          setshowNavbar(false);
                          naviagte(`${data.path}`);
                        }}
                      >
                        {data.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div className=" lg:block  hidden">
              {token === null ? (
                <button
                  className=" text-[15px] rounded-lg  px-5 py-2 bg-orange-400 text-white lg:block hidden"
                  onClick={() => {
                    setmodal(true);
                  }}
                >
                  Login
                </button>
              ) : (
                <div className=" relative">
                  <img
                    src={userData.image}
                    alt=""
                    className=" w-[40px] h-[40px] rounded-full object-cover cursor-pointer border border-gray-400"
                    onClick={() => setshowModal(!showModal)}
                  />
                  <div
                    className={`${
                      showModal ? " block" : " hidden"
                    }  absolute  p-2 border border-gray-400 rounded-lg bg-white -translate-x-8 translate-y-3 flex items-center justify-between flex-col cursor-pointer`}
                    onClick={() => setshowModal(false)}
                  >
                    <div
                      className=" flex items-center justify-between w-full gap-3"
                      onClick={() => naviagte("/dashboard/my-profile")}
                    >
                      <MdDashboard />
                      <p>Dashboard</p>
                    </div>
                    <hr className=" w-full h-[1px] bg-gray-500" />
                    <div
                      className=" flex items-center justify-between w-full gap-3"
                      onClick={() => dispatch(logout(naviagte, dispatch))}
                    >
                      <RiLogoutBoxRLine />
                      <p>Logout</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* responsive navbar  */}
            <div
              className={`${
                showMobileNavbar ? " block lg:hidden" : " translate-x-[100%]"
              } w-[270px] fixed right-0  top-[69px] h-screen bg-white transition-all duration-500 z-[200] overflow-auto pb-20`}
            >
              <div className=" flex flex-col gap-3 px-4 py-2" onClick={()=> setshowMobileNavbar(false)}>
                <p className=" text-[14px] font-semibold text-gray-600">
                  To check all available pujas & offers:
                </p>
                {token === null ? (
                  <button
                    className=" p-2 bg-blue-500 text-white rounded-xl"
                    onClick={() => {
                      setmodal(true);
                    }}
                  >
                    Login / Create an account
                  </button>
                ) : (
                  <button
                    className=" p-2 bg-blue-500 text-white rounded-xl"
                    onClick={() => dispatch(logout(naviagte, dispatch))}
                  >
                    Logout
                  </button>
                )}
              </div>
              <hr className=" w-full h-[1px] bg-gray-600" />
              <div className=" flex flex-col gap-3 px-4 py-2" onClick={()=> setshowMobileNavbar(false)}>
                <p className=" text-[14px] font-semibold text-gray-600">
                  Account details
                </p>
                <Link
                  className=" w-full flex items-center justify-between"
                  to={"/dashboard/my-profile"}
                >
                  <div className=" flex items-center gap-2 text-gray-500 px-2 text-sm">
                    <FaUser />
                    My profile
                  </div>
                  <FaAngleRight />
                </Link>

                <Link
                 className=" w-full flex items-center justify-between"
                 to={"/dashboard/booked-pooja"}
                 >
                  <div className=" flex items-center gap-2 text-gray-500 px-2 text-sm">
                  <MdLibraryBooks />
                  <p>My Puja Bookings</p>
                  </div>
                  <FaAngleRight />
                </Link>
                <hr className=" w-full h-[1px] bg-gray-600" />
                <div className=" flex flex-col gap-2" onClick={()=> setshowMobileNavbar(false)}>
                <p className=" text-[14px] font-semibold text-gray-600">
                  Explore srimandir services
                </p>
                  {
                    NavLinks.map((data)=>{
                      return <Link className=" flex items-center justify-between " to={data.path}>
                        {
                          data.title !== "Library" && <p className=" text-gray-500 text-sm">{data.title}</p>
                        }
                        {
                          data.title !== "Library" &&  <FaAngleRight />
                        }
                      </Link>
                    })
                  }
                </div>
                <hr className=" w-full h-[1px] bg-gray-600" />
                <div className=" flex items-center justify-between" onClick={()=> setshowMobileNavbar(false)}>
                <div
                            className=" flex  gap-2 items-center text-gray-500 hover:bg-slate-50"
                            onClick={() => naviagte("/articles")}
                          >

                             <FaBook className="  p-2 rounded-xl text-3xl bg-white shadow-sm shadow-black" />

                              <h2 className="">
                                Sanatan Sahitya
                              </h2>
                              
                          </div>
                          <FaAngleRight />
                </div>
                          {sectionDetail?.slice(0, 6)?.map((data, index) => {
                            return (
                             <div className=" w-full flex items-center justify-between">
                             <div
                                className=" flex  gap-2 items-center text-gray-500 hover:bg-slate-50"
                                key={index}
                                onClick={() =>
                                  naviagte(`/articles/${data.title}`)
                                }
                              >
                                {data.title === "Arti" ? (
                                  <FaHandsPraying className=" p-2 rounded-xl text-3xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Chalisa" ? (
                                  <FaBook className="  p-2 rounded-xl text-3xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Mantra" ? (
                                  <GiByzantinTemple className="  p-2 rounded-xl text-3xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Incarnations of gods and goddesses" ? (
                                  <FaMusic  className="   p-2 rounded-xl text-3xl bg-white shadow-sm shadow-black" />
                                ): (
                                  <FaBook className="   p-2 rounded-xl text-3xl bg-white shadow-sm shadow-black" />
                                )}

                                <div>
                                  <h2 className=" ">
                                  {`${data?.title?.slice(0, 15)}...`}
                                  </h2>
                                </div>
                              </div>
                              <FaAngleRight />
                             </div>
                            );
                          })}
              </div>
              <hr className=" w-full h-[1px] bg-gray-600" />
              <div className=" flex flex-col gap-3 px-4 py-2" onClick={()=> setshowMobileNavbar(false)}>
              <p className=" text-[14px] font-semibold text-gray-600">
                  Help and support for Puja Booking
                </p>
                <div className=" p-2 bg-gray-200 rounded-xl flex gap-3 flex-row items-center">
                  <img src={callImage} alt="" className=" w-[30px] -rotate-45 object-cover rounded-full h-[30px]" />
                  <div className=" flex flex-col">
                    <Link to={"tel:+919213996943"} className=" text-[14px] font-semibold">+91 9213996943</Link>
                    <Link to={"tel:+919213996943"} className=" text-[11px] text-gray-500">You can call us from 10 AM - 8 PM</Link>

                  </div>
                </div>
                <div className=" flex w-full justify-between">
                          <div className=" p-2 bg-gray-200 rounded-xl flex gap-3 flex-row items-center">
                          <img src={gmailImage} alt="" className=" w-[30px]  object-cover rounded-full h-[30px]" />
                          <Link to={"mailto:Palmakku08@gmail.com"} className=" text-[12px] font-semibold">Email us</Link>
                          </div>
                           <div className=" p-2 bg-gray-200 rounded-xl flex gap-3 flex-row items-center">
                          <img src={whatsappIconImage} alt="" className=" w-[20px]  object-cover rounded-full h-[30px]" />
                          <Link to={"https://wa.me/919213996943"} className=" text-[12px] font-semibold">Whatsapp us</Link>
                          </div>
                </div>
              </div>
            </div>

            <div className=" lg:hidden block">
              {showMobileNavbar ? (
                <RxCross2
                  className=" cursor-pointer text-lg"
                  onClick={() => setshowMobileNavbar(false)}
                />
              ) : (
                <IoMenuOutline
                  className=" cursor-pointer text-lg"
                  onClick={() => setshowMobileNavbar(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {modal && <Template cancelHandler={() => setmodal(null)} />}
    </>
  );
};

export default Navbar;
