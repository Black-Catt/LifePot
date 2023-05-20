import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import filter from './filterSlice';
import { productsSlice } from '../api/productsSlice';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { cart, filter, [productsSlice.reducerPath]: productsSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
