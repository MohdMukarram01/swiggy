import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Cartcontext, Coordinates } from "../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, clearcart } from "../Utility/cartslice";
import toast from "react-hot-toast";

function RestaurantMenu() {
    const [val,setval]=useState(0);
    const [menudata,setMenudata]=useState([]);
    const {coord : {lat,lng}}=useContext(Coordinates);
    // console.log(lat,lng)

    const [resinfo,setresinfo]=useState([])
    // console.log(resinfo)

    const [discountdata,setdiscountdata]=useState([]);
    // console.log(discountdata)
    const { id } = useParams();
    let mainid=id.split("rest").at(-1);
    // console.log(mainid)

    async function fetchresdata()
    {
      const data=await fetch(`${import.meta.env.VITE_BASE_URL2}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${mainid}&submitAction=ENTER`)
      const res= await data.json()
      setresinfo(res?.data?.cards[2]?.card?.card?.info);
      setdiscountdata(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
      // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

       let actualMenu = res?.data?.cards.find((data) => data?.groupedCard);

        // console.log(res);

        setMenudata(
            actualMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (data) =>
                    data?.card?.card?.itemCards || data?.card?.card?.categories
            )
        );




      let actualdata=(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(data=> data?.card?.card?.itemCards || data?.card?.card?.categories);
      // console.log(actualdata);
      setMenudata(actualdata);
    }


    useEffect(()=>{
      fetchresdata()
    },[])

    
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
    <div className="w-[95%] md:w-[800px] h-[300px] mx-auto pt-7">
      {/* {menudata}  {mainid}  */}
      <p className="text-[12px] text-slate-500 cursor-pointer "> <Link to={"/"}><span className="hover:text-slate-700">Home</span></Link> / <Link><span className="hover:text-slate-700 cursor-pointer"> {resinfo?.city}</span></Link> / <Link><span className="hover:text-slate-700 cursor-pointer">{resinfo?.name} </span></Link> </p>
      <h1 className="font-bold text-[28px]">{resinfo?.name}</h1>
      <div className="w-full h-[180px] p-5 bg-gradient-to-t from-slate-400/70  rounded-[30px]  mt-3">
        <div className="w-ful p-5 border border-slate-400/70 rounded-[30px] h-full bg-white ">
          <div className="flex gap-1 font-semibold">
              <i className="fi text-green-800 fi-ss-circle-star"></i>
              <span>{resinfo?.avgRating}</span>
              <span>({resinfo?.totalRatingsString})</span>
              •
              <span>{resinfo?.costForTwoMessage}</span>
          </div>
          <p className="text-[#FF5200] underline text-[14px] ">{resinfo?.cuisines?.join(", ")}</p>
          <div className="flex gap-2 mt-2">
            <div className="w-[7px] flex flex-col justify-center items-center">
              <div className="w-[7px] h-[7px] bg-gray-500 rounded-full text-black"></div>
               <div className="w-[2px] h-[20px] bg-gray-500 rounded-full "></div>
              <div className="w-[7px] h-[7px] bg-gray-500 rounded-full text-black"></div>
            </div>
            <div className="flex flex-col gap-[1px] font-semibold ">
              <div className="flex gap-2 font-semibold text-[14px]">
                  <p>Outlet</p> <span className="text-gray-400">{resinfo?.locality}</span>
              </div>
              <p className="text-[14px]">{resinfo?.sla?.slaString}</p>
            </div>

             {/* <div className="flex gap-2">
              <p></p> <span>{resinfo.locality}</span>
             </div> */}

          </div>

          {/* <hr /> */}
          {/* <div className="flex ">
             <i className="fi w-[50px] fi-ts-biking"></i>
            hello
          </div> */}
        </div>
      </div>

        <div className="w-full mt-5 overflow-x-hidden">
          <div className='flex justify-between '>
           <h1 className='font-bold text-[21px] pl-2'>Deals for you</h1>
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
              discountdata?.map((value,id)=>(
  
                <div key={id} className="w-[328px] h-[76px]  m-2 flex flex-col justify-center items-center">
                  <div className="w-[302px] rounded-3xl flex border border-gray-400 ">
                    <img key={id} className='w-[65px] p-2' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.offerLogo}`} alt="" />
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-[16px] font-semibold">{value?.info?.header}</p>
                      <p className="text-[14px] text-gray-500">{value?.info?.couponCode}</p>
                    </div>
                    
                  </div>
                </div>
                
              ))
            }
          </div>
        </div>


        <h2 className="font-semibold mt-5 text-gray-500 text-center">MENU</h2>
        <div className="relative mt-5 w-full">
        <div className="w-full p-2 font-semibold text-[14px] bg-slate-200 text-gray-500 text-center rounded-xl">Search for dishes</div>
         <p className="absolute cursor-pointer text-gray-500 right-3 -translate-y-[30px] "><i className="fi fi-rr-search"></i></p>
         <div className=" mt-20 bg-slate-200  h-[1px]"><hr /></div>
        </div>
        

        <div className="mt-10">
          {
            menudata?.map(({card:{card}},id)=>(
              <MenuCard key={id} card={card} resinfo={resinfo}/>
            ))
          }
        </div>
    </div>
  ) 
}

function MenuCard({card,resinfo}){
  // console.log(resinfo)
  // console.log(card)
  let hello=false;
  if(card["@type"])
  {
    hello=true;
  }
  const [isopen,setisopen]=useState(hello);
  // console.log(isopen)
    function toggledropdown(i)
    {
      setisopen((prev)=>!prev)
    }
  if(card.itemCards){
    const {title,itemCards}=card;
    return(
      <>
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold">{title}{" "}   {itemCards?.length > 0 ? `(${itemCards.length})` : ""}</h1>
          <i className={"fi fi-rs-angle-small-" + (isopen ? "up" : "down") } onClick={toggledropdown}></i>
        </div>
        {
          isopen &&
          <DetailMenu itemCards={itemCards} resinfo={resinfo}/>
        }
      </div>
       <div className={`my-5 bg-gray-300 ${card["@type"] ? "h-[10px]" : "h-[4px]"}`} />
      </>
    )

  }
  else{
    const {title,categories}=card;
    return(
      <div>
        <h1 className="font-bold text-[18px]">{card.title}</h1> 
        {
          categories.map((data,idxm)=>(
            <div key={idxm} className="mt-3">
              <MenuCard card={data} resinfo={resinfo} />
            </div>
          ))
          
        }
      </div>
    )
  }
}

function DetailMenu({itemCards,resinfo}){
  // console.log(resinfo)
  // console.log(itemCards)
  return(
    <div>
      {
        itemCards?.map(({card:{info}},index)=>(
          <DetailMenuCard key={index} info={info} resinfo={resinfo} />
        ))
      }
    </div>
  )
}


function DetailMenuCard({info,resinfo}){
  // console.log(resinfo)
  const{name,price,imageId,defaultPrice,description,itemAttribute:{vegClassifier},ratings:{aggregatedRating:{rating,ratingCountV2}}}=info;
  const cartData=useSelector((state)=>state.cartslice.cartItems)
  const getresinfofromlocalstorage=useSelector((state)=>state.cartslice.resInfo)
  const [isdiffRes,setisdiffRes]=useState(false);
//  console.log(getresinfofromlocalstorage)
 const dispatch=useDispatch(); 
 function handlecart()
  {
    // console.log(info)
    const isAdded=cartData.find((data)=>data.id===info.id)
    // let getresinfofromlocalstorage=JSON.parse(localStorage.getItem("resInfo")) || [];
    if(!isAdded)
    {
      if(getresinfofromlocalstorage.name===resinfo.name || getresinfofromlocalstorage.length===0)
      {
        // setCartData((prev)=>[...prev,info])
        // localStorage.setItem("cartData",JSON.stringify([...cartData,info]))
        // localStorage.setItem("resInfo",JSON.stringify(resinfo));
        dispatch(addtocart({info,resinfo}))
        toast.success("item added")
      }else{
        // alert("different restaurant item")
        toast.error("different restaurant item")
        setisdiffRes((prev)=>!prev)
      }
  
    }
    else{
      // alert("Already Added")
      toast.error("Already Added")
    }
  }
  function handleisdiffRes(){
    setisdiffRes((prev)=>!prev)
  }
  function handletoClearcart()
  {
    dispatch(clearcart())
    setisdiffRes((prev)=>!prev)
    toast.success("Know Cart Is Clear")
  }

  let veg="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
  let nonveg="https://freesvg.org/img/1531813245.png"
  return(
    <div className="mt-3 relative">
        {/* info?.map(({name,price,imageId,defaultPrice,description,itemAttribute:{vegClassifier},ratings:{aggregatedRating:{rating,ratingCountV2}}})=>() */}
          <>
          <div className="w-full flex justify-between">
            <div className="w-[55%] md:w-[70%] flex flex-col gap-1">
                <img className="w-5 rounded-[2px]" src={(vegClassifier === "VEG" ? veg : nonveg)} alt=""/>
                <h2 className="text-[18px] font-semibold text-[#4e535a]">{name}</h2>
                <h1 className="font-semibold text-gray-900 text-[16px]">₹{price/100 || defaultPrice/100}</h1>
                {
                  rating ? <div className="flex gap-1">
                  <p className={rating > 4.5 ? "text-red-600":"mt-[2px]  text-green-600"}><i className="fi fi-ss-star"></i> </p>
                  <h1><span className={rating > 4.5 ? "text-red-600 "  : "text-green-600"}>{rating} </span>({ratingCountV2}) </h1>
                </div>: " "
                }
            
                <p className="text-[#4c4949] line-clamp-2">{description}</p>
            </div>
            <div className="w-[40%] md:w-[20%] h-[196px] relative">
              <img className="rounded-xl aspect-square" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`+ imageId} alt="" />
              <button onClick={handlecart} className="bg-white absolute bottom-[30px] left-1/2 -translate-x-1/2 border px-8 py-2 drop-shadow rounded-xl font-bold text-green-700 hover:bg-gray-300">ADD</button>
            </div>
          </div>
          <hr className="my-5" />
          {
            isdiffRes && (
              <div className="w-[520px] h-[204px] left-[32%] shadow-sm fixed bottom-5 z-50 bg-white flex justify-center items-center">
                <div className="w-[465px] flex flex-col gap-2 justify-center">
                  <p className="font-bold text-[20px]">Items already in cart</p>
                  <div className="text-[15px]"> 
                  <p>Your cart contains items from other restaurant.Would you like to reset</p> 
                  <p>your cart for adding items from this restaurant?</p>
                  </div>

                  <div className="flex justify-between">
                    <button onClick={handleisdiffRes} className="w-[200px] py-2 font-bold border-2 border-[#1ba673] text-[#1ba673]">NO</button>
                    <button onClick={handletoClearcart} className=" w-[200px] py-2 bg-[#1ba673] font-bold text-white">YES START AFRESH</button>
                  </div>
                </div>
              </div>
            )
          }
          </>
    </div>
  )
}

export default RestaurantMenu;
