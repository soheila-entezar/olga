import React from 'react'
import { Link } from 'react-router-dom'
import Menue from '../Menue/Menue'

function Header() {
  return (
    <div>
      <div className='w-[100%] h-[45px] bg-[#1a1919] flex justify-center items-center text-[#ece9e9]'>
        <div className='px-1'>Get inspiration from the latest fashions and everyday styles </div>
        <Link className='hover:text-[#edb4b4]' to={''}> here</Link>
      </div>
      <Menue/>
    </div>
  )
}

export default Header
