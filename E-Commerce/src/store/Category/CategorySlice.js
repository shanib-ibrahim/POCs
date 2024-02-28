import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  categories: [],
  error: "",
};

export const fetchAllCategories = createAsyncThunk(
  "categories/fetAllCategories",
  async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
