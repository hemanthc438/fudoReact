import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
const itemStore = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default itemStore;