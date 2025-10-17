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
                    {/* <div key={id} className='min-w-[255px] h-[170px] relative'>
                     <img  className='w-full h-full aspect-video rounded-xl object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.cloudinaryImageId}`} alt="" />
                     <div className='bg-gradient-to-t from-black from-1 to-translate to-50% w-full h-full absolute top-0 rounded-xl'></div>
                     <p className='absolute bottom-0 text-white font-bold pl-2 text-xl'>{`${value?.info?.aggregatedDiscountInfoV3?.header || ""} ${value?.info?.aggregatedDiscountInfoV3?.subHeader || ""}`}</p>
                    </div>
                    <div className='mt-3'>
                      <p className='font-bold text-lg]'>{value?.info?.name}</p>
                      <p className='flex gap-1'><i className="fi text-green-800 fi-ss-circle-star"></i> <p className='font-semibold'>{value?.info?.avgRating}</p>•<p className='font-bold'>{value?.info?.sla?.slaString}</p> </p>
                      <p className='text-gray-700 line-clamp-1'>{value?.info?.cuisines.join(", ")}</p>
                      <p className='text-gray-700'>{value?.info?.locality}</p>
                    </div> */}
                </div>
              ))
            }
          </div>
           <hr className='border' />
    </div>
  )
}

export default Toprestaurant;
