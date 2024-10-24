import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import {add,remove} from "../redux/slice/CartSlice"
    import { Form } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CartItem = ({post}) => {
 
   const dispatch=useDispatch();

   function deleteItem(){
      dispatch(remove(post.id));
   }

  return (
    <div>
        <div className=' flex justify-center w-full gap-10 border-b-2 border-slate-800 mt-[20px]'>
            <div className='flex items-center w-[30%] mb-10'>
                <img src={post.image} 
                />
            </div>
            <div className='flex flex-col items-center gap-10 w-[70%]'>
                <h1 className='text-slate-800 font-bold '>
                    {post.title}
                </h1>
                <h1 className=' text-slate-600 '>
                {post.description.split(" ").slice(0,20).join(" ") + "..."}
                </h1>

                <div className=' flex justify-between w-full'>
                    <p className=' text-green-600 font-bold '>
                        ${post.price}
                    </p>

                    <div onClick={deleteItem} className=' h-[25px] w-[25px] rounded-full bg-red-400 text-red-700 flex justify-center items-center'>
                       <AiFillDelete/>
                       
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CartItem
