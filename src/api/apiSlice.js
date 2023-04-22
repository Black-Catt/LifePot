import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/.netlify/functions' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/single-product?id=${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = apiSlice;
