import { configureStore } from '@reduxjs/toolkit'
import data from './Shop'
import MyShop from './MyShop'
import Price from './Price'

export default configureStore({
  reducer: {
    item:data,
    myShop:MyShop,
    price:Price
  }
})