import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cart from './cartSlice';
import products from './productsSlice';
import filter from './filterSlice';
import { apiSlice } from '../api/apiSlice';

export default configureStore({
  reducer: { cart, products, filter, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
