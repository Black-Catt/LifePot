import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GlobalProductInDTO } from './dto/product';

interface SingleProductParams {
  id: string;
}

export const productsSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/.netlify/functions' }),
  endpoints: (builder) => ({
    getProducts: builder.query<GlobalProductInDTO[], void>({
      query: () => '/products',
    }),
    getSingleProduct: builder.query<GlobalProductInDTO, SingleProductParams>({
      query: ({ id }) => `/single-product?id=${String(id)}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsSlice;
