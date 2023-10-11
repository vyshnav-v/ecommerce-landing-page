import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchProducts: [],
  fetchProductsLoading: false,
  fetchProductsError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsReq: (state) => {
      state.fetchProductsLoading = true;
      state.fetchProductsError = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.fetchProductsLoading = false;
      state.fetchProducts = action.payload;
    },
    fetchProductsFail: (state, action) => {
      state.fetchProductsLoading = false;
      state.fetchProductsError = action.payload;
    },
  },
});

export const { fetchProductsReq, fetchProductsSuccess, fetchProductsFail } =
  productsSlice.actions;

export default productsSlice.reducer;
