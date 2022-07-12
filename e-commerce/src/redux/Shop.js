import {createSlice} from '@reduxjs/toolkit'


export const data=createSlice({
    name:'data',
    initialState:{
        products:[]
    },
    reducers:{
        add:(state, item)=>{
            state.products.push(item.payload)
        },
        remove:(state, item)=>{
            state.products=item.payload
        }
    }
})

export const {add, remove}=data.actions
export default data.reducer