import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0, // Add total price field
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;
      const id = product.id;
      const existingItem = state.items.find((item) => item.product.id === id);

      if (existingItem) {
        // If the item already exists, update its quantity
        existingItem.quantity += quantity;
      } else {
        // If it's a new item, add it to the items array
        state.items.push({ quantity, product });
      }

      // Update totalQuantity
      state.totalQuantity += quantity;

      // Update total price based on the added item's price and quantity
      state.totalPrice += product.price * quantity;
    },
    removeItem: (state, action) => {
      const { product, quantity } = action.payload;
      const id = product.id;

      state.items = state.items.filter((item) => item.product.id !== id);

      // Update totalQuantity
      state.totalQuantity -= quantity;

      // Update total price based on the removed item's price and quantity
      state.totalPrice -= product.price * quantity;
    },
  },
});
 
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
