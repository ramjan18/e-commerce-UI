import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import image from "../image.jpg"
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

const {Cart}=useSelector((state)=>state);

  return (
    <div className='flex justify-between items-center mx-auto w-8/12 '>
      <div>
        <NavLink to="/">
            <img src={image}  height={25} width={35}/>

        </NavLink>
        </div>
      <div className='flex text-white items-center gap-5'>
        <div>
        <NavLink to="/">Home</NavLink>
        </div>

        <div className='relative'>
          <NavLink to="/Cart ">
            <FaShoppingCart/>
            {Cart.length > 0 &&
            <span className=' bg-green-600 h-[15px] w-[15px] flex justify-center items-center text-white rounded-full absolute -right-1 text-[12px] -top-2'>{Cart.length}</span>
            }
          </NavLink>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar
