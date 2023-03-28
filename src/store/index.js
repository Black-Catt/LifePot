import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import products from './productsSlice';
import filter from './filterSlice';

export default configureStore({
  reducer: { cart, products, filter },
  // devTools: process.env.NODE_ENV !== 'production',
});
