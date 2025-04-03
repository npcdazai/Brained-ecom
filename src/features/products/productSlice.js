import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  const data = response.data;
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    productData: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.warn("Error", action.payload);
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
