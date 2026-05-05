import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ICartCount{
    value:number
}

const initialCartCount:ICartCount={
    value:0
}

const cartCountSlicer=createSlice({
    name:'cartCount',
    initialState:initialCartCount,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },incrementByAmount:(state,action:PayloadAction<number>)=>{
                state.value+=action.payload;

        }

    }
})
//keys actions ->toolkit
export const{increment,decrement,incrementByAmount}=cartCountSlicer.actions;
//action methods
export default cartCountSlicer.reducer;

