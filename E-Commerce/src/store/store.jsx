import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import CategoryReducer from "./Category/CategorySlice";
import CartReducer from "./Cart/CartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    categories: CategoryReducer,
    carts: CartReducer,
  },
});

export default store;
