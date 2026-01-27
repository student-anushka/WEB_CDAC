import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addRecordInCart: () => {},
    removeRecordFromCart: () => {},
  },
});

export const { addRecordInCart, removeRecordFromCart } = cartSlice.actions;
export default cartSlice.reducer;
