import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { TfiMenu } from "react-icons/tfi";

function Menue() {
  const [openMenu, setOpenMenu] = useState(null);
  const [menuBar, setMenuBar] = useState(false);

  const toggleMenu = (menuKey) => {
    setOpenMenu((prevMenu) => (prevMenu === menuKey ? null : menuKey));
  };

  const handleBar = () => {
    setMenuBar(!menuBar);
  };
///handel size screen 
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {  
    const handleResize = () => {  
      setIsMediumScreen(window.innerWidth >= 768);  
      // Close the menu if the screen size is medium or larger  
      if (window.innerWidth >= 768) {  
        setMenuBar(false);  
      }  
    };  

    window.addEventListener("resize", handleResize);  

    return () => {  
      window.removeEventListener("resize", handleResize);  
    };  
  }, []);  
  console.log(isMediumScreen)

  return (
    <>
    <div className={`${menuBar?'h-screen bg-[#eee0e0] w-[40%]':'w-[100%]'} `}>
      <div className={`w-[100%] sm:hidden p-3 ${menuBar?'w-[40%] bg-[#eee0e0]':'bg-[#ffffff]'}`} onClick={handleBar}>
        <TfiMenu />
      </div>
     <div className={`w-[40%] sm:w-[100%]  sm:h-[10%] bg-[#eee0e0] sm:bg-[#ffffff] grid sm:flex justify-start sm:justify-end lg:justify-between sm:items-center`} >
      <div className="hidden lg:w-[10%] lg:flex justify-center font-[vazir-thin-eot] text-[35px]">
        Olga
      </div>
      
      <div
        className={`${
          menuBar||isMediumScreen ? "w-[100%]  sm:h-[100%] rounded-md bg-[#eee0e0] sm:bg-[#ffffff] sm:block sm:w-[70%] lg:w-[50%] mx-2 my-3" : "hidden"
        }`}
      >
        <ul className="grid ml-2 sm:flex sm:justify-between lg:justify-end">
          <li className="w-[100%] sm:w-[16%] mr-2 grid font-[vavir-thin]">
            <Link to={""}>HOME</Link>
          </li>
          <li className="w-[100%] sm:w-[16%] mr-2 grid font-[vavir-thin]">
            <Link to={""}>ABOUT</Link>
          </li>
          <li className="w-[100%] sm:w-[16%] mr-2 grid font-[vavir-thin]">
            <Link to={""}>SERVICES</Link>
          </li>
          <li
            className="w-[100%] sm:w-[20%] mr-2 font-[vavir-thin] relative"
            onClick={() => toggleMenu("menu1")}
          >
            <div className="grid sm:flex items-center cursor-pointer">
              <div className="flex items-center">
                LAYOUTS
                <div className="px-1 text-[10px]">
                  <SlArrowDown />
                </div>
              </div>
              <ul
                className={`${
                  openMenu === "menu1" ? "scale-y-100" : "scale-y-0 h-[0px]"
                } sm:absolute left-0 sm:left-auto sm:right-0 sm:top-[1rem] sm:w-[200px] sm:bg-white shadow-lg z-10 mt-2 space-y-2 p-2 transition-transform duration-300 transform origin-top`}
              >
                <li className="w-[80%] my-1 text-[13px] hover:bg-[#f9f0f0]">
                  Occasion Layouts
                </li>
                <li className="w-[80%] py-1 text-[13px] hover:bg-[#f9f0f0]">
                  Seasonal Layouts
                </li>
                <li className="w-[80%] py-1 text-[13px] hover:bg-[#f9f0f0]">
                  Everyday Layouts
                </li>
                <li className="w-[80%] py-1 text-[13px] hover:bg-[#f9f0f0]">
                  New Arrivals
                </li>
              </ul>
            </div>
          </li>
          <li
            className="w-[100%] sm:w-[20%] mr-2 font-[vavir-thin] relative"
            onClick={() => toggleMenu("menu2")}
          >
            <div className="grid sm:flex items-center cursor-pointer">
              <div className="flex items-center">
                SALES
                <div className="px-1 text-[10px]">
                  <SlArrowDown />
                </div>
              </div>
              <ul
                className={`${
                  openMenu === "menu2" ? "scale-y-100 " : "scale-y-0 h-[0]"
                } sm:absolute left-0 sm:left-auto sm:right-0 sm:top-[1rem] sm:w-[200px] sm:bg-white shadow-lg z-10 mt-2 space-y-2 p-2 transition-transform duration-300 transform origin-top`}
              >
                <li className="w-[80%] py-1 text-[13px] hover:bg-[#f9f0f0]">
                  Special Discounts
                </li>
                <li className="w-[80%] py-1 text-[13px] hover:bg-[#f9f0f0]">
                  Seasonal Sales
                </li>
                <li className="w-[80%] py-1 text-[13px] hover:bg-[#f9f0f0]">
                  Daily Deals
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden md:w-[10%] md:flex">
        <ul className="w-[100%] flex justify-between">
          <li className="w-[20%] text-[#727272] hover:text-[#f28787]">
            <Link to={""}>
              <FaInstagram />
            </Link>
          </li>
          <li className="w-[20%] text-[#727272] hover:text-[#f28787]">
            <Link to={"https://www.pinterest.com/pin/155303887742437496/"}>
              <FaPinterest />
            </Link>
          </li>
          <li className="w-[20%] text-[#727272] hover:text-[#f28787]">
            <Link to={""}>
              <FaFacebook />
            </Link>
          </li>
          <li className="w-[20%] text-[#727272] hover:text-[#f28787]">
            <Link to={""}>
              <IoIosHeart />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
    </>
   
  );
}

export default Menue;
