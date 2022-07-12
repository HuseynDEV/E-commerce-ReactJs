import {createSlice} from '@reduxjs/toolkit'


export const Price=createSlice({
    name:'price',
    initialState:{
        allPrice:[]
    },
    reducers:{
        addPrice:(state, item)=>{
            state.allPrice.push(item.payload)
        },

    }
})

export const {addPrice}=Price.actions
export default Price.reducer