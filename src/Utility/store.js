import { configureStore } from "@reduxjs/toolkit";
import toogleSlice from "./toogleSlice";
import cartslice from "./cartslice"
import filterslice from "./filterslice"
import authSlice from "./AuthSlice"


const store = configureStore({
    reducer : {
        toogleSlice,
        cartslice,
        filterslice,
        authSlice,
    }
})

export default store;