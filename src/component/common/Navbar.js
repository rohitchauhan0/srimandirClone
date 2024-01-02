import React, { useEffect, useState } from "react";
import logo from "../../Assets/img_sm_logo_en_dark.svg";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { NavLinks } from "../../Data/NavbarLink";
import { FaAngleDown, FaHandsPraying } from "react-icons/fa6";
import Template from "../core/Auth/Template";
import { useDispatch, useSelector } from "react-redux";
import { apiConnector } from "../../Services/ApiConnector";
import { authEndPoints, sectionEndPoint } from "../../Services/AllApi";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { logout } from "../../Services/Operations/AuthOper";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaBook } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";

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
  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const response = await apiConnector("POST", GET_USER_BY_ID_API, null, {
          Authorization: `Bearer ${token}`,
        });
        setuserData(response.data.data);
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
        className={`${
          showNavbar ? " w-full h-screen flex items-center justify-center" : ""
        } fixed top-0  z-[1000] w-full  bg-white border-b-[1px] border-gray-200`}
      >
        <div
          className={`${
            showNavbar ? "flex-col gap-6" : ""
          }  flex items-center  flex-row  justify-between py-3  max-w-screen-xl mx-auto lg:px-0 px-5`}
        >
          <Link>
            <img src={logo} alt="" />
          </Link>

          <div className={`${showNavbar ? " block" : " hidden"} lg:block`}>
            <div
              className={`${
                showNavbar ? " flex-col space-y-6 " : "space-x-8 "
              } flex items-center  text-[17px]  font-semibold`}
            >
              {NavLinks.map((data) => {
                return (
                  <div
                  >
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
                         <div className=" flex  gap-2 items-center text-gray-400 hover:bg-slate-50"
                         onClick={()=> naviagte("/articles")}
                          >
                         <FaBook  className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                <div>
                                  <h2 className=" text-orange-500">Sanatan Sahitya</h2>
                                  <p>Read all Articles</p>
                                </div>
                              </div>
                          {sectionDetail?.slice(0,6)?.map((data, index) => {
                            return (
                              <div
                                className=" flex  gap-2 items-center text-gray-400 hover:bg-slate-50"
                                key={index}
                                onClick={()=> naviagte(`/articles/${data.title}`)}
                              >
                                {data.title === "Arti" ? (
                                  <FaHandsPraying className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                ) : data.title === "Chalisa" ? (
                                    <FaBook  className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black" />
                                ) : data.title=== "Mantra" ? ((
                                    <GiByzantinTemple  className=" text-orange-500 p-2 rounded-xl text-4xl bg-white shadow-sm shadow-black"/>
                                )) : "" }

                                
                                <div>
                                  <h2 className=" text-orange-500">{data.title}</h2>
                                  <p>{data.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (<p
                    className={` ${
                      matchRoute(`${data.path}`)
                        ? " text-orange-500"
                        : " text-black"
                    } hover:text-orange-700 transition-all duration-200 cursor-pointer`}

                    key={data.id}
                    onClick={() => {setshowNavbar(false)
                     naviagte(`${data.path}`)}}
                    
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
            {token === null ? (
              <button
                className=" text-[15px] rounded-lg  px-5 py-2 bg-orange-400 text-white"
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
                  className={` ${
                    showModal ? "block" : "hidden"
                  } absolute  p-2 border border-gray-400 rounded-lg bg-white -translate-x-8 translate-y-3 flex items-center justify-between flex-col cursor-pointer`}
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
            <div className=" lg:hidden block">
              {showNavbar ? (
                <RxCross2
                  className=" cursor-pointer text-lg"
                  onClick={() => setshowNavbar(false)}
                />
              ) : (
                <IoMenuOutline
                  className=" cursor-pointer text-lg"
                  onClick={() => setshowNavbar(true)}
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
