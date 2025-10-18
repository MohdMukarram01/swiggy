import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function Search() {

      const filteroption=[
    {
      filterName:"Restaurant"
    },
    {
      filterName:"Dishes"
    },

  ]
    const [activeBtn, setActiveBtn] = useState("Dishes");
    const [searchQuery, setSearchQuery] = useState("");
    const [dishes, setdishes] = useState([]);
    const [Restaurant, setRestaurant] = useState([]);

    function handleFilterBtn(filterName) {
        setActiveBtn(activeBtn === filterName ? activeBtn : filterName);
    }

      async function fetchDishes() {
        let data = await fetch(`${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=19.046109348109795&lng=72.84988481551409&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&queryUniqueId=bd8776ed-792b-992d-1489-26eeb1431bdf&selectedPLTab=DISH`);
        let res = await data.json();
        const finalData = (res?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH?.cards).filter(
            (data) => data?.card?.card?.info
        );
        setdishes(finalData);
        // console.log(finalData)
    }



      async function fetchResaturantData() {
        let data = await fetch(`${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=26.5488639&lng=80.2258513&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&queryUniqueId=31e999ef-950c-b3ff-1bef-121082104a28&selectedPLTab=RESTAURANT`)
        let res = await data.json();
        const finalData = (res?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards).filter(
            (data) => data?.card?.card?.info
        );
        setRestaurant(finalData);
        // console.log(finalData)
    }

    useEffect(() => {
        if (searchQuery === "") {
            return;
        }
        // setSearchQuery("");
        fetchDishes();
        fetchResaturantData();
    }, [searchQuery]);

  return (
      <div className="w-full mt-10 md:w-[800px] mx-auto">
            <div className="w-full relative">
                <i className="fi fi-rr-angle-small-left text-2xl ml-2 mt-1 absolute top-1/2 -translate-y-1/2"></i>
                <i className="fi fi-rr-search absolute top-1/2 right-0 -translate-y-1/2 mr-5"></i>
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    // onKeyDown={handleSearchQuery}
                    className="border-2 w-full pl-8 py-3 text-xl focus:outline-none"
                    type="text"
                    placeholder="Search for restaurant and food"
                />
            </div>
        <div className="flex flex-wrap justify-start gap-3 my-3">
        {
          filteroption.map((data,idx)=>(
            // <button className={"filterbtn flex gap-1 " + (activebtn===data.filterName ? "active":"")} >
            <button key={idx} onClick={()=>handleFilterBtn(data.filterName)}  className={"filterbtn flex gap-1 " + (activeBtn===data.filterName ? "active":"")} >
              <p>{data.filterName}</p>
            </button>
            
          ))
        }
      </div>


         <div className='w-full bg-[#f2f4f5] grid md:grid-cols-2 grid-cols-1 gap-2 p-4'>
           {
            activeBtn=="Dishes" ?
                dishes.map(({card:{card:{restaurant:{info:{name:resName,avgRating,sla:{slaString}}},info:{name,imageId,id,description,price,ratings:{aggregatedRating:{rating}}}}}})=>(
                  <div className='flex justify-center  gap-2'>
                  <div className='bg-white mt-2  w-[410px] h-[275px] rounded-2xl border border-gray-300'>
                    <div className='p-4'>
                      <h1>{resName}</h1>
                      <div className='flex gap-2'>
                        <div className='flex gap-1'>
                          <p>{avgRating}</p>
                          <p><i className="fi mt-1 fi-ss-star"></i> </p>
                        </div>
                         <p>{slaString}</p>
                      </div>
                     <hr className='w-full border-dotted border-gray-500' />
                    </div>



                    <div className=' flex gap-2 p-3'>
                      <div className="w-full md:w-[50%] flex flex-col gap-1">
                          <h2 className="text-[18px] font-semibold text-[#4e535a]">{name}</h2>
                          <h1 className="font-semibold text-gray-900 text-[16px]">₹{price/100 || defaultPrice/100}</h1>
                        <div className='flex flex-col'>
                          <div className="flex gap-1">
                            <p><i className="fi fi-ss-star"></i> </p>
                            <p>{rating}</p>
                          </div>
                          <p className="text-[#4c4949] line-clamp-2">{description}</p>
                        </div>
                      </div>
                      
                        <div className="w-full md:w-[40%] h-[196px] relative">
                            <img className="rounded-xl aspect-square" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} alt="" />
                            <button className="bg-white absolute bottom-[30px] left-1/2 -translate-x-1/2 border px-8 py-2 drop-shadow rounded-xl font-bold text-green-700 hover:bg-gray-300">ADD</button>
                        </div>
                    </div>




                  
                </div>  
                </div>
                )):Restaurant.map(({card:{card:{info:{id,
                    cloudinaryImageId,
                    aggregatedDiscountInfoV3 = {},
                    cuisines,
                    promoted = false,
                    costForTwoMessage,
                    name,
                    avgRating,
                    sla: { slaString },
                  }}}})=>(
                <div className="bg-white m-4 p-4 flex gap-5 items-center md:max-w-fit ">
                        <div className=" w-[30%] ">
                            <img
                                className="aspect-square rounded-lg"
                                src={
                                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                                    cloudinaryImageId
                                }
                                alt=""
                            />
                        </div>
                        <div className="w-[60%]">
                            <p className="font-bold line-clamp-1">By {name}</p>
                            <p className="my-1">
                                {" "}
                                <i className="fi fi-ss-star"></i> {avgRating} .{" "}
                                {costForTwoMessage}
                            </p>
                            <p className="line-clamp-1">{cuisines.join(", ")}</p>
                        </div>
                  </div>
                )) 
            }
        </div>
       </div>
)}

export default Search
