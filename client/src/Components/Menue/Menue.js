import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

function Menue() {
  return (
    <div className='w-[100%] h-[90px] flex justify-around lg:justify-between items-center'>
      <div className='hidden lg:w-[10%] lg:flex justify-center font-[vazir-thin-eot] text-[35px]'>
        Olga
      </div>
      <div className='w-[90%] sm:w-[70%] lg:w-[50%] '>
        <ul className='flex justify-between lg:justify-end'>
            <li className='w-[16%] font-[vavir-thin]'><Link to={''}>HOME</Link> </li>
            <li className='w-[16%] font-[vavir-thin]'><Link to={''}>ABOUT</Link> </li>
            <li className='w-[16%] font-[vavir-thin]'> <Link to={''}>SERVICES</Link></li>
            <li className='w-[20%] font-[vavir-thin]'> <div className='flex items-center cursor-pointer' to={''}>LAYOUTS <div className='px-1 text-[10px]'><SlArrowDown /></div> 
            </div></li>
            <li className='w-[20%] font-[vavir-thin]'> <div  className='flex items-center cursor-pointer' to={''}>SALES  <div className='px-1 text-[10px]'><SlArrowDown /></div>
            </div></li>
        </ul>
      </div>
      <div className='hidden md:w-[10%] md:flex'>
        <ul className=' w-[100%] flex justify-between'>
            <li className='w-[20%] text-[#727272] hover:text-[#f28787]'><Link to={''}><FaInstagram /></Link></li>
            <li className='w-[20%] text-[#727272] hover:text-[#f28787]'><Link to={'https://www.pinterest.com/pin/155303887742437496/'}><FaPinterest /></Link></li>
            <li className='w-[20%] text-[#727272] hover:text-[#f28787]'><Link to={''}><FaFacebook /></Link></li>
            <li className='w-[20%] text-[#727272] hover:text-[#f28787]'><Link to={''}><IoIosHeart /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Menue
