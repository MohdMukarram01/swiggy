import React from 'react'
import { useState, useEffect } from 'react';


function Onyourmind({data}) {
  // console.log(data)
    const [val,setval]=useState(0);
    // const [data,setdata]=useState([]);
    // async function fetchdata() {
    //     const data=await fetch('http://localhost:5001/api/restaurants');
    //     const result=await data.json();
    //     // console.log(result);
    //     setdata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    // }

    // useEffect(()=>{
    //   fetchdata();
    // },[])

    function handlenext()
    {
       val >= 130 ?" ": setval((prev)=>prev + 52)
      //  console.log(val)
    }
    function handleprev()
    {
     val == 0 ?" " : setval((prev)=>prev - 52)
      // console.log(val)
    }
  return (
    <div>
        <div className='flex justify-between '>
           <h1 className='font-bold text-[21px] pl-2'>What's in your mind?</h1>
            <div className='flex gap-1 mt-1'>
              <div onClick={handleprev} className={`bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${val <= 0 ? "bg-gray-200 " : "bg-gray-300"}`}>
                <i className={`fi text-2xl mt-1 rounded-full fi-rr-arrow-small-left `+ (val<=0?"text-gray-400" :"text-gray-800")}></i>
              </div>
              <div onClick={handlenext} className={`bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${val >= 150 ? "bg-gray-200 " : "bg-gray-300"}`}>
                <i  className={`fi text-2xl mt-1 rounded-full fi-rr-arrow-small-right `+ (val>=150?"text-gray-400" :"text-gray-800")}></i>
              </div>
            </div>
            </div>
          <div style={{translate : `-${val}%`}} className='flex duration-1000 '>
              {
              (data ?? []).map((value,id)=>(
                <img key={value.id} className='w-[148px] p-2' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} alt="" />
              ))
            }
          </div>
           <hr className='border' />
    </div>
  )
}

export default Onyourmind;
