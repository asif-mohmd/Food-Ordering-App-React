import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

// configure store is using to create our own store
const appStore = configureStore({

    reducer:{
        cart:cartReducer

    }
    
});



export default appStore;