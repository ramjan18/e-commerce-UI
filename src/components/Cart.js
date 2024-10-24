import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const {Cart}=useSelector((state) => state);
  const [totleAmmount,setTotleAmmount] = useState(0);

  useEffect(() => {
    setTotleAmmount(Cart.reduce( (acc,curr) => (acc + curr.price ),0));
  })

  return (
    <div className='flex w-8/12 justify-center mx-auto mt-10'>
       <div className='flex'>
          {
            Cart.length > 0 ? 
            ( <div className='flex gap-10'>
                  <div>{
                    Cart.map((post) => (
                      <CartItem  post={post}/>
                    ))
                    }
                    
                  </div>
                  <div className='flex flex-col justify-between w-[100%] '>
                      <div >
                          <p className='text-green-700 text-[20px] font-semibold'>YOUR CART </p>
                          <p className='text-green-700 text-[35px] font-bold'>SUMMARY</p>

                          <p className='text-slate-800 font-bold'>Totle Items : {Cart.length}</p>
                      </div>
                      <div>
                        <p className='text-slate-800 font-bold'>Totle Ammount : <span className='font-extrabold'>${totleAmmount}</span> 
                        </p>
                        <button className='bg-green-700 text-white font-semibold px-10 py-2 rounded-md w-full'>CHECKOUT NOW</button>
                        </div>
                    </div>
              </div>
             
            ) :
             (
              <div className=' w-screen h-screen flex flex-col justify-center items-center gap-7 overflow-hidden '>
                <p className='text-green-600 font-bold text-xl '>CART IS EMPTY</p>
                
                <NavLink to="/">
                  <button className='bg-green-600 text-white px-10 py-1 rounded-md hover:bg-white hover:text-green-600 hover:border-green-600 hover:border-2 transition-all duration-300 ease-in'>
                     SHOP NOW
                  </button>
                </NavLink>
              </div>
            )
          }
       </div>

       
    </div>
  )
}

export default Cart
