import { createSlice } from "@reduxjs/toolkit";


export const myShop=createSlice({
    name:'myshop',
    initialState:{
        addList:2,
    },
    reducers:{
       increment:state=>{
        state.addList+=1
       },
       decrement:state=>{
        state.addList-=1
       }
    }
})



export const {increment, decrement}=myShop.actions

export default myShop.reducer