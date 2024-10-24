import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Product from './Product';


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
 const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  async function fetchData(){
    setLoading(true);
    try {
      const data =await fetch(API_URL);
      const result= await data.json();
      setPosts(result);
      console.log(result)
    } catch (error) {
      console.log("error occured")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className='w-8/12 mx-auto '>
      <div >
         {
          loading ? (<Spinner/>) : 
          posts.length > 0 ? (
            
              <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
               posts.map((post)=>{
                return (
                 <Product key={post.id} post={post} />
                )
              })
            }
              </div>
        
                
              
           
          ) :
          (
             <div className=' flex justify-center items-center w-full h-screen text-xl text-green-600 font-bold'>
              <p>Data Not Found</p>
             </div>
          )
         }
      </div>
       
    </div>
  )
}

export default Home
