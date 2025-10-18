import React, { useState,useEffect, useContext} from "react";
import {Link,Outlet } from "react-router-dom";
import { Cartcontext, Coordinates } from "../Context/Context.js";
import { useDispatch, useSelector } from "react-redux";
import { toogleSearchBar,toggleLogin } from "../Utility/toogleSlice";
import Signin from "./Signin";

function Head() {
  const visible=useSelector((state)=>state.toogleSlice.searchBarToogle);
  const visible2=useSelector((state)=>state.toogleSlice.loginToggle);
  // console.log(visible2)
  // console.log(data)
  const dispatch=useDispatch()
    // const [visible,setvisible]=useState(false);
    const [location,setlocation]=useState("");
    const [searchresult,setsearchresult]=useState([]);
    const {setcoord}=useContext(Coordinates);
    // const {cartData,setCartData}=useContext(Cartcontext);...
    const cartData=useSelector((state)=>state.cartslice.cartItems)

    // console.log(cartData)
    // console.log(searchresult)

    // https://www.swiggy.com/dapi/misc/address-recommend?place_id=ChIJN3GxoW7O5zsR4_XLO7GOGf4  find lag and lat

  async function searchresultfun(val){
    const value = val || "";
      if (!val) {
      setsearchresult([]); // input blank -> result clear
      return;             // aur function yahin stop
  }
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/misc/place-autocomplete?input=${val}&types=`);
    const data = await res.json();
    setsearchresult(data.data)
  } catch (error) {
    console.error("Error in frontend fetch:", error);
  }
}

 useEffect((val)=>{
  searchresultfun(val);
 },[])


 async function fetchlatANDlng(id,loc) {
        if (id == "") return;
        setlocation(loc)
        // console.log(id);
        // handleVisibility();
        handleVisibility()
        const res = await fetch(
            `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/address-recommend?place_id=${id}`
        );
        const data = await res.json();
        setcoord({
            lat: data.data[0].geometry.location.lat,
            lng: data.data[0].geometry.location.lng,
        });
        // console.log(data.data[0].geometry.location.lat);
        // console.log(data.data[0].geometry.location.lng);
        // setAddress(data.data[0].formatted_address);
    }


//  async function fetchlatANDlng(place_id) {                                                                                                                                                                                                                                   
//   if(place_id=="") return;
//   console.log(place_id)
//     const res= await fetch(`http://localhost:5001/api/misc?id=${place_id}`);
//     const data = await res.json();
//     console.log(data)
//     // setcoord({
//     //   lat:data?.data[0]?.geometry?.location?.lat,
//     //   lng:data?.data[0]?.geometry?.location?.lng
//     // })
//     // console.log(data?.data[0]?.geometry?.location?.lat)
//     // console.log(data.data[0].geometry.location.lat)
//     // console.log(data.data[0].geometry.location.lng)
//  }

//   useEffect((val)=>{
//   fetchlatANDlng();
//  },[])


//   async function fetchlatANDlng(val){
//     // console.log(val)
//   try {
//     // apne backend ke endpoint ko call karo
//     const res = await fetch(`http://localhost:5001/api/misc`);
//     const data = await res.json();
//     // console.log("Swiggy Location API Response:", data.data);
//     console.log(data)
//     // setsearchresult(data.data)
//   } catch (error) {
//     console.error("Error in frontend fetch:", error);
//   }
// }

//  useEffect((val)=>{
//   fetchlatANDlng(val);
//  },[])


// searchresultfun();



  useEffect(() => {
  if (visible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [visible]);

    function handlesearch(){
      // setvisible((prev)=>!prev);
        dispatch(toogleSearchBar())
    }
    function handleVisibility()
    {
        // setvisible((prev)=>!prev);
        dispatch(toogleSearchBar())
    }


    const Userdata=useSelector(state=>state.authSlice.userData)
    // console.log(Userdata.name,Userdata.photo)
      useEffect(() => {
  if (visible2) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [visible2]);

    function handlelogin(){
      // setvisible((prev)=>!prev);
        dispatch(toggleLogin())
    }
    function handleVisibility2()
    {
        // setvisible((prev)=>!prev);
        dispatch(toggleLogin())
    }

    

  return (
    <>
         <div onClick={handleVisibility} className={"w-full bg-black/50 z-30 h-full absolute " + (visible ? "visible " : " invisible")} ></div>
            <div className={ " bg-white flex justify-end w-full md:w-[40%] h-full p-5 z-40 absolute duration-500 " + (visible ? "left-0" : "-left-[100%]")}>
              {/* <p onClick={handleVisibility} className="bg-black text-white p-5 w-[10%]">hwllo sir</p> */}
              <div className="w-[360px] flex flex-col gap-5 mr-10 pt-9">
                 <i onClick={handleVisibility} className="fi text-2xl fi-sr-cross-small"></i>
                  <input onChange={(e)=>searchresultfun(e.target.value)} type="text" placeholder="Search for area, street name.." className="border p-5 w-full font-semibold focus:shadow-lg focus:outline-none" />
                  <div>
                    <ul className="m-5">
                        { searchresult.length > 0 &&  
                          searchresult.map((data,index)=>{
                            const idx=(index===searchresult.length-1)
                            return (
                              <div key={index} className="flex gap-3">
                              <p className="mt-2">
                                <i className="fi mt-2 fi-rs-marker"></i>
                              </p>
                              
                              <div>
                                <li onClick={()=>fetchlatANDlng(data.place_id,data?.structured_formatting?.main_text)}>{data?.structured_formatting?.main_text || "no name"} <p className="text-sm opacity-65">{data?.structured_formatting?.secondary_text || item?.description}</p> </li>
                               {!idx&&
                                <p className="opacity-35">---------------------------------------------</p>
                               }
                              </div>
                            
                            </div>
                            )
                          })
                        }
                    </ul>
              </div>
              </div>
            </div> 
         <div>
         <div className={`w-full z-30 bg-black/50 h-screen absolute ${(visible2 ? "visible": "invisible")} ${visible2 ? "fixed inset-0" : " "}`}></div>
           <div className={`bg-white flex w-full md:w-[40%] h-screen z-40 fixed top-0 right-0 transform transition-transform duration-500 ${visible2 ? "translate-x-0" : "translate-x-full"}`}>
              {/* <p onClick={handleVisibility} className="bg-black text-white p-5 w-[10%]">hwllo sir</p> */}
              <div className="w-[95%] md:w-[60%] md:ml-5 pt-9 flex ml-2.5 flex-col gap-2 ">
                  <i onClick={handleVisibility2} className="fi text-2xl fi-sr-cross-small"></i>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-3xl">Login</p>
                        <hr className="w-10 border border-black" />
                    </div>
                    <img className="w-32" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
                  </div>
                  <div >
                     <Signin />
                  </div>
                  <p className="text-[14px]">By Clicking On Login, I Accept The Term & Condition and Privacy Policy</p>
                  
              </div>
            </div> 
        </div>
     <div className="relative w-full h-full">
    <div className="w-full sticky top-0 z-20 bg-white shadow-xl h-20 flex justify-center items-center">
        <div className="w-full md:w-[75%] flex justify-between">
            <div className="flex items-center  gap-4">
                <Link to={"/"}>
                <div className="w-14 md:w-20">
                 <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_TEzL-RFZJF1MYHvmT8aXx9Vsb8eTIXxCg&s" alt="logo" />
                 </div>
                 </Link>
                 
                 <div className="flex justify-center items-center gap-1 cursor-pointer" onClick={handlesearch}>
                    <p className="font-semibold border-b-2 border-black flex gap-2">others </p>
                    <p className="pl-2 text-[15px] line-clamp-1 max-w-56">{location}</p>
                    <i className="fi text-[#f6881f] text-xl mt-2 fi-rs-angle-small-down "></i>
                 </div>
            </div>
                 <div className="hidden md:flex gap-6 items-center">
                   {/* <Link to={"*"}>
                    <div className="flex gap-2">
                        <i className="fi mt-1 fi-rr-devices"></i>
                        <p className="font-semibold">Swiggy Corporate</p>
                    </div>
                    </Link> */}
                     <Link to={"/Search"}>
                    <div className="flex gap-2">
                        <i className="fi mt-1 fi-rs-search"></i>
                        <p className="font-semibold">Search</p>
                    </div>
                     </Link>
                    {/* <Link to={"*"}>
                    <div className="flex gap-2">
                        <i className="fi mt-1 fi-rr-badge-percent"></i>
                        <p className="font-semibold">Offer</p>
                    </div>
                    </Link> */}
                    {/* <Link to={"*"}>
                      <div className="flex gap-2">
                        <i className="fi mt-1 fi-rs-interrogation"></i>
                        <p className="font-semibold">Help</p>
                    </div>
                      </Link> */}
                      <div onClick={handlelogin} className="flex gap-1">
                         {
                        Userdata ? <img className="w-8 rounded-2xl" src={`${Userdata.photo}`} /> :
                        <i className="fi mt-1 fi-rs-user"></i>
                      }
                     <div className="flex gap-2">
                        <p className="font-semibold">{Userdata ? Userdata.name :" Sign in"}</p>
                    </div>
                    </div>
                    <Link to={"/Cart"}>
                    <div className="flex gap-2">
                        <i className="fi mt-1 fi-rr-shopping-cart"></i>
                        <p className="font-semibold">Cart</p>
                        <p>{cartData.length>0? cartData.length:"0"}</p>
                    </div>
                     </Link>
                 </div>


                 <div className="flex gap-6 items-center md:hidden mr-3">
                    <Link to={"*"}>
                     <i className="fi mt-1 fi-rs-search"></i>
                    </Link>
                    
                  <i onClick={handlelogin} className="fi mt-1 fi-rs-user"></i>
                     <Link to={"/Cart"}>
                       <i className="fi mt-1 fi-rr-shopping-cart"></i>
                     </Link>
                 </div>
        </div>
    </div>
    <Outlet />
    </div>
    </>
  );
}

export default Head;
