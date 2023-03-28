import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (url) => {
    const response = await axios.get(url);
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  'products/fetchSingleProduct',
  async (url) => {
    const response = await axios.get(url);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
  },
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products_loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const featured_products = action.payload.filter(
          (product) => product.featured === true
        );
        state.products_loading = false;
        state.products_error = false;
        state.products = action.payload;
        state.featured_products = featured_products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products_loading = false;
        state.products_error = true;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.single_product_loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.single_product_loading = false;
        state.single_product_error = false;
        state.single_product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.single_product_loading = false;
        state.single_product_error = true;
      });
  },
});

export const { openSidebar, closeSidebar } = productsSlice.actions;

export default productsSlice.reducer;
