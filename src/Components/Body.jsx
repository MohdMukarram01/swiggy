import { useContext, useEffect, useState } from "react";
import Onyourmind from "./Onyourmind";
import Toprestaurant from "./Toprestaurant";
import Restaurent from "./RestaurentCard";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import { Coordinates } from "../Context/Context";
import { useDispatch, useSelector } from "react-redux";
function Body() {
      const [onyourminddata,setonyourminddata]=useState([]);
      const [toprestaurantdata,settoprestaurantdata]=useState([]);
      const [onlineFoodDeliverydata,setonlineFoodDeliverydata]=useState([]);
      // console.log(onlineFoodDeliverydata)
      // console.log(toprestaurantdata)
      const {coord : {lat,lng}}=useContext(Coordinates);
      const [toprestitle,settoprestitle]=useState("");
      const [onlineTitle,setonlinetitle]=useState("");
      const filterval=useSelector((state=>state.filterslice.filterval))
      // console.log(filterval)
      const filterData=onlineFoodDeliverydata.filter(item=>{
        if(!filterval) return;

        switch(filterval)
        {
          // case "filter": return 
          case "Ratings 4.0+": return item?.info?.avgRating > 4
          case "Offer": return item?.info?.aggregatedDiscountInfoV3?.subHeader
          case "Rs. 300-Rs. 600": return item?.info?.costForTwo.slice(1,4) >= "300" && item?.info?.costForTwo.slice(1,4) <= "600"
          case "Less than Rs. 300": return item?.info?.costForTwo.slice(1,4) <= "300" 
          default : return;
        }






        
      })


      async function fetchdata() {
          const data=await fetch(`${import.meta.env.VITE_BASE_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
          const result=await data.json();
          settoprestitle(result?.data?.cards[1]?.card?.card?.header?.title);
          setonlinetitle(result?.data?.cards[2]?.card?.card?.title);
          setonyourminddata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
          settoprestaurantdata(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setonlineFoodDeliverydata(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
  
      useEffect(()=>{
      if (lat && lng) {
      fetchdata();
      }
    },[lat,lng])

  return (
    <div className='w-full'>
        <div className=' w-[90%] sm:w-[90%] md:w-[75%]  mx-auto overflow-hidden mt-3'>
           <Onyourmind data={onyourminddata} />
           <Toprestaurant data={toprestaurantdata} title={toprestitle} />
           <OnlineFoodDelivery data={filterval ? filterData : onlineFoodDeliverydata} title={onlineTitle}/>
           {/* <Restaurent /> */}

        </div>
        
    </div>
  )
}

export default Body;
