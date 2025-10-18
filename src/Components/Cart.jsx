import React, { useContext } from 'react'
import { Cartcontext } from '../ContextData/Context.js'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearcart, deleteItem } from '../Utility/cartslice';
import toast from 'react-hot-toast';

function Cart() {
  
  // const {cartData,setCartData}=useContext(Cartcontext);
 //  console.log(cartData)  ....
 const dispatch=useDispatch();
 const cartData=useSelector((state)=>state.cartslice.cartItems)
 const resInfo=useSelector((state)=>state.cartslice.resInfo)
 console.log(resInfo)
//  const resInfo = useSelector((state) => state.cartslice.resInfo)
//  console.log(resInfo)

  function handleremove(i){
    if(cartData.length>1){
      const Newarr=[...cartData]
      Newarr.splice(i,1);
      // setCartData(Newarr)

      dispatch(deleteItem(Newarr))
      toast.success("Food removed")


      // localStorage.setItem("cartData",JSON.stringify (Newarr))
    }else{
      allclear();
      toast.success("Cart Clear")
    }
  
  }
  function allclear()
  {
    // setCartData([])
    dispatch(clearcart())
    // localStorage.setItem("cartData",JSON.stringify([])) //ye fir localStorage.clear() likh do bs clear baat same hia;
    // localStorage.setItem("resInfo",JSON.stringify([]))
    // localStorage.clear();
    // dispatch(clearcart())
  }

 const Userdata=useSelector(state=>state.authSlice.userData)
 const navigation = useNavigate();
  function handlepalceorder()
  {
    if(!Userdata)
    {
      toast.error("Please Login")
      return
    }
    else{
      toast.success("Your Order is Successfully completed")
    }

  }
  let totalprice=0;
  for(let i=0;i<cartData.length;i++)
  {
    totalprice=totalprice+cartData[i].price/100 || totalprice+cartData[i].defaultPrice/100;
  }

  if (cartData.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
      <h1 className="text-2xl font-bold text-black">
        Kuch order kar le bhai, bhookha hoga !.........
      </h1>
       <Link to="/" >
       <button className="bg-gray-400 border  px-8 py-2 mt-10 drop-shadow rounded-xl font-bold text-black hover:bg-black hover:text-white hover:transition-all hover:duration-300">
        yahan se order kr sakte ho..
       </button>
     </Link>
    </div>
  );
}

  return (
    <div className='w-full'>
      <div className='w-[95%] md:w-[800px] mx-auto'>
        <div className="my-10 flex gap-5">
            <img
                className="rounded-xl w-40 aspect-square"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    resInfo.cloudinaryImageId
                }
                alt=""
            />
            <div>
                <p className="text-5xl border-b-2 border-black pb-3 ">{resInfo.name}</p>
                <p className="mt-3 text-xl ">{resInfo.areaName}</p>
            </div>
          </div>
        {
            cartData.map((data,i)=>(
                <div className='flex justify-between my-10 '>
                <div className='w-[55%] md:w-[70%]'>
                  <h2 className='text-xl'>{data.name}</h2>
                  <p className="font-semibold text-gray-900 text-[16px]">₹{data?.price/100 || data?.defaultPrice/100}</p>
                  <p className='text-[#4c4949] line-clamp-2'>{data?.description}</p>
                </div>
                <div className="w-[40%] md:w-[20%] h-[196px] relative">
                     <img className="rounded-xl aspect-square" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${data.imageId}`} alt="" />
                     <button onClick={()=>handleremove(i)} className="bg-white absolute bottom-[25px] left-1/2 -translate-x-1/2 border px-8 py-2 drop-shadow rounded-xl font-bold text-green-700 hover:bg-gray-300">Remove</button>
               </div>
                </div>
            ))
        }
        <div className='w-full hidden md:flex justify-between pb-4 pr-10'>
            <button onClick={handlepalceorder} className='py-2 px-6 border border-black rounded-xl hover:bg-gray-500 hover:text-white hover:duration-300'>Place Order</button>
            <p>TotalPrice-{totalprice}</p>
            <button onClick={allclear} className='py-2 px-6 border border-black rounded-xl hover:bg-gray-500 hover:text-white hover:duration-300'>ClearCart</button>
        </div>

        <div className='md:hidden flex flex-col justify-center items-center gap-2'>
            <button onClick={handlepalceorder} className='py-2 px-6 border border-black rounded-xl hover:bg-green-500 hover:text-white hover:duration-300'>Place Order</button>
            <p>TotalPrice-{totalprice}</p>
            <button onClick={allclear} className='py-2 px-6 border border-black rounded-xl hover:bg-gray-500 hover:text-white hover:duration-300'>ClearCart</button>
        </div>
         
      </div>
   
    </div>
  )
}

export default Cart
