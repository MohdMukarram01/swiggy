import React from 'react'
import { useState, useEffect } from 'react';
import RestaurentCard from './RestaurentCard';
import OnlineFoodDelivery from './OnlineFoodDelivery';

function Toprestaurant({data,title}) {
  // console.log(data)
    const [val,setval]=useState(0);
    // const [data,setdata]=useState([]);
    // async function fetchdata() {
    //     const data=await fetch('http://localhost:5001/api/restaurants');
    //     const result=await data.json();
    //     setdata(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // }

    // useEffect(()=>{
    //   fetchdata();
    // },[])

    function handlenext()
    {
       val >= 100 ?" ": setval((prev)=>prev + 40)
       console.log(val)
    }
    function handleprev()
    {
     val == 0 ?" " : setval((prev)=>prev - 40)
    }
  return (
     <div className='mt-8 w-full'>
        <div className='flex justify-between '>
           <h1 className='font-bold text-[21px] pl-2'>{title}</h1>
            <div className='flex gap-1 mt-1'>
              <div onClick={handleprev} className={`bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${val <= 0 ? "bg-gray-200 " : "bg-gray-300"}`}>
                <i className={`fi text-2xl mt-1 rounded-full fi-rr-arrow-small-left `+ (val<=0?"text-gray-400" :"text-gray-800")}></i>
              </div>
              <div onClick={handlenext} className={`bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${val >= 80 ? "bg-gray-200 " : "bg-gray-300"}`}>
                <i  className={`fi text-2xl mt-1 rounded-full fi-rr-arrow-small-right `+ (val>=100?"text-gray-400" :"text-gray-800")}></i>
              </div>
            </div>
            </div>
          <div style={{translate : `-${val}%`}} className='flex duration-1000 gap-4 min-w-full mt-4'>
              {
              (data ?? []).map((value,id)=>(
                
                <div key={id} className='transition-transform duration-300 hover:scale-90 cursor-pointer'>
                  <RestaurentCard value={value} />

                </div>
              ))
            }
          </div>
           <hr className='border' />
    </div>
  )
}

export default Toprestaurant;
