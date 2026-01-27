// create a store
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './slices/cartSlice';
import searchReducer from "./slices/searchSlice";

const projectstore = configureStore({
    //add slices here 
  reducer: {
    cart: cartReducer, search: searchReducer
  },
});

export default projectstore;