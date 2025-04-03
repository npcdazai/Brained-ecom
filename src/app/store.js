import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/products/productSlice";
import cartReducers from "../features/cart/cartSlice"

export const store = configureStore({
    reducer: {
        products: productReducers,
        cart: cartReducers
    }
});
