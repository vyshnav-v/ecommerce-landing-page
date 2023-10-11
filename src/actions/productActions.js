import { fetchProductsFail, fetchProductsReq, fetchProductsSuccess } from "../features/fetchProductsSlice";
import axiosConfig from "../config/axios";
export const fetchingProducts = () => async (dispatch) => {
  try {
   

    const config = {
      headers: {
        "Content-Type": "application/json",
       
      },
    };
    dispatch(fetchProductsReq());
    const productsData = await axiosConfig.get(`/products`, config);

    dispatch(fetchProductsSuccess(productsData.data));
  } catch (error) {
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(fetchProductsFail(errorIs));
  }
};
