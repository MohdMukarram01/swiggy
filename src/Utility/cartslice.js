import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cartslice",
    initialState:{
        cartItems:JSON.parse(localStorage.getItem("cartData")) || [],
        resInfo:JSON.parse(localStorage.getItem("resInfo")) || [],
    },
    reducers:{
        addtocart:(state,action)=>{
            // console.log(state)
            const {info,resinfo}=action.payload;
            // setCartData((prev)=>[...prev,info])
            state.cartItems=[...state.cartItems,info]
            state.resInfo = resinfo
            localStorage.setItem("cartData",JSON.stringify(state.cartItems))
            localStorage.setItem("resInfo",JSON.stringify(resinfo));
        },
        deleteItem:(state,action)=>{
            state.cartItems=action.payload
            localStorage.setItem("cartData",JSON.stringify(action.payload))
        },
        clearcart:(state)=>{
            state.cartItems=[];
            // localStorage.clear();
            state.resInfo=[];
            localStorage.removeItem("cartData")
            localStorage.removeItem("resInfo");
            // localStorage.clear()
        },
    }
})
export const {addtocart,deleteItem,clearcart}=cartslice.actions;
export default cartslice.reducer;