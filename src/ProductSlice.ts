import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import reducer from "./CartCountSlicer";

export const fetchProducts=createAsyncThunk("product",async()=>{

    const response=await fetch("https://dummyjson.com/products")
    const result=await response.json();
    return result.products;
 });

 export interface IProduct{
    title:string,
    description:string
 }
 interface IProductState{
    items:IProduct[],
    status:boolean
 }
 const InitialProduct:IProductState={
    items:[],
    status:false
 }


 const productSlice=createSlice({
    name:'products',
    initialState:InitialProduct,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<IProduct[]>)=>{
            state.items=action.payload;
            state.status=true
        })
    }
 })
 export default productSlice.reducer;
