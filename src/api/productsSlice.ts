import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GlobalProductInDTO } from './dto/product';

export const productsSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/.netlify/functions' }),
  endpoints: (builder) => ({
    getProducts: builder.query<GlobalProductInDTO[], void>({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/single-product?id=${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsSlice;
