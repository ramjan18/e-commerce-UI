import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../redux/slice/CartSlice";
import { UseSelector } from 'react-redux';

const Product = ({post}) => {
 
    const {Cart}=useSelector((state) => state);
    const dispatch=useDispatch();

    function removeItem(){
        dispatch(remove(post.id));
    }

    function addItem(){
        dispatch(add(post));
    }

  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-xl hover:shadow-2xl">
      <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
        {post.title}
      </div>

      <div className='text-sm text-slate-600 '>
      {post.description.split(" ").slice(0,10).join(" ") + "..."}
      </div>

      <div className='h-[180px]'>
        <img src={post.image} className='w-full h-full' />
      </div>

      <div className="flex justify-between  items-center w-full mt-5">

        <div className=' text-green-700  font-bold '>
           ${post.price}
        </div>

        <div>
            {
               Cart.some((p) => p.id ===  post.id ) ? 
              (
                <button onClick={removeItem} 
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">REMOVE ITEM</button>
              ) :
              (
                <button onClick={addItem}
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">ADD TO CART</button>
              )
            }
        </div>
      </div>

    </div>
  )
}

export default Product
