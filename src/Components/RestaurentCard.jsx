import React from 'react'
import { Link } from 'react-router-dom';

function RestaurentCard({value,id}) {
  // console.log(value?.cta?.link.split("/")[5])
  return (
    <Link to={`/restaurant/${value?.cta?.link.split("/")[5]}`}>
        <div key={id} className='min-w-[255px] h-[170px] relative'>
         <img  className='w-full h-full aspect-video rounded-xl object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.cloudinaryImageId}`} alt="" />
         <div className='bg-gradient-to-t from-black from-1 to-translate to-50% w-full h-full absolute top-0 rounded-xl'></div>
         <p className='absolute bottom-0 text-white font-bold pl-2 text-xl'>{`${value?.info?.aggregatedDiscountInfoV3?.header || ""} ${value?.info?.aggregatedDiscountInfoV3?.subHeader || ""}`}</p>
        </div>
        <div className='mt-3'>
          <p className='font-bold text-lg]'>{value?.info?.name}</p>
          <div className='flex gap-1'><i className="fi text-green-800 fi-ss-circle-star"></i> <p className='font-semibold'>{value?.info?.avgRating}</p>•<p className='font-bold'>{value?.info?.sla?.slaString}</p> </div>
          <p className='text-gray-700 line-clamp-1'>{value?.info?.cuisines.join(", ")}</p>
          <p className='text-gray-700'>{value?.info?.locality}</p>
        </div>
    </Link>
  )
}

export default RestaurentCard;


