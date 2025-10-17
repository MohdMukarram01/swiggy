import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"AuthSlice",
    initialState:{
        userData:JSON.parse(localStorage.getItem("userData")) || null  //Converts a JavaScript Object Notation (JSON) string into an object.
    },
    reducers:{
        adUserData:(state,action)=>{
            state.userData=action.payload
            localStorage.setItem("userData",JSON.stringify(action.payload)) //Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

        },
        removeUserData:(state)=>{
            state.userData=null;
            localStorage.removeItem("userData")
        }


    }
})
export const {adUserData,removeUserData}=authSlice.actions;
export default authSlice.reducer;