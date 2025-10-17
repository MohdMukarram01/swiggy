import { createSlice } from "@reduxjs/toolkit";


const filterslice=createSlice({
    name:"filterslice",
    initialState:{
        filterval:null
    },
    reducers:{
        setfilterval:(state,action)=>{
            state.filterval=action.payload
        }
    }
})
export const {setfilterval}=filterslice.actions
export default filterslice.reducer;