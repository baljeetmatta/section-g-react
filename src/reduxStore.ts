//Store, Actions, Reducer
//Store ->Slice(Reducer->Actions->toolki)
//1. Create Store
//2. Store->Provider
//3. Slicer->reducer->actions(toolkit)
//RTK
import CartReducer from "./CartCountSlicer"
import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice"
const store=configureStore({
    reducer:{
        cartCount:CartReducer,
        products:ProductReducer
    }
})

export default store;
//store.getState();
export type RootType=ReturnType<typeof store.getState>;
