import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { useDispatch } from "react-redux";
import { setfilterval } from "../Utility/filterslice";

function OnlineFoodDelivery({ data,title}) {
  // console.log(data);
  const filteroption=[
    {
      filterName:"Ratings 4.0+"
    },
    {
      filterName:"Offer"
    },
    {
      filterName:"Rs. 300-Rs. 600"
    },
    {
      filterName:"Less than Rs. 300"
    },

  ]

  const [activebtn,setactivebtn]=useState(null);
  const dispatch=useDispatch();
  function handleFilterbtn(filterName)
  {
    setactivebtn(activebtn===filterName ? null :filterName)
  }
  dispatch(setfilterval(activebtn))

  return (
    <div className="mt-8">
      <h1 className='font-bold text-[21px]'>{title}</h1>
      <div className="flex flex-wrap justify-start gap-3 my-3">
        {
          filteroption.map(data=>(
            <button onClick={()=>handleFilterbtn(data.filterName)} className={"filterbtn flex gap-1 " + (activebtn===data.filterName ? "active":"")} >
              <p>{data.filterName}</p>
              <i className={"fi mt-[2px] h-0 fi-sr-cross-small hidden"}></i>
            </button>
          ))
        }
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
        {(data ?? []).map((value, id) => (
          <div
            key={id}
            className="transition-transform duration-300 hover:scale-90 cursor-pointer">
            <RestaurentCard value={value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineFoodDelivery;
