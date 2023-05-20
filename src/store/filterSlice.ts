import { createSlice } from '@reduxjs/toolkit';
import { GlobalProductInDTO } from '../api/dto/product';

interface FiltersItems {
  text: string;
  category: string;
  color: string;
  min_price: number;
  max_price: number;
  price: number;
  shipping: boolean;
}

interface GeneralFilter {
  filtered_products: GlobalProductInDTO[];
  all_products: GlobalProductInDTO[];
  grid_view: boolean;
  isSidebarOpen: boolean;
  sort: string;
  filters: FiltersItems;
}

const initialState: GeneralFilter = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  isSidebarOpen: false,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      let maxPrice = action.payload.map((p: GlobalProductInDTO) => p.price);
      maxPrice = Math.max(...maxPrice);
      state.all_products = action.payload;
      state.filtered_products = action.payload;
      state.filters.max_price = maxPrice;
      state.filters.price = maxPrice;
    },
    setGridView: (state) => {
      state.grid_view = true;
    },
    setListView: (state) => {
      state.grid_view = false;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    sortProducts: (state) => {
      const { sort, filtered_products } = state;
      let tempProducts: GlobalProductInDTO[] = [];
      switch (sort) {
        case 'price-lowest':
          tempProducts = filtered_products.sort((a, b) => a.price - b.price);
          break;
        case 'price-highest':
          tempProducts = filtered_products.sort((a, b) => b.price - a.price);
          break;
        case 'name-a':
          tempProducts = filtered_products.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case 'name-z':
          tempProducts = filtered_products.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;
      }
      state.filtered_products = tempProducts;
    },
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    },
    filterProducts: (state) => {
      const { all_products } = state;
      const { text, category, color, price, shipping } = state.filters;
      let tempProducts: GlobalProductInDTO[] = [...all_products];
      //filtering
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text.toLowerCase())
        );
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }

      tempProducts = tempProducts.filter((product) => product.price <= price);

      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        );
      }
      state.filtered_products = tempProducts;
    },
    clearFilters: (state) => {
      state.filters.text = '';
      state.filters.category = 'all';
      state.filters.color = 'all';
      state.filters.price = state.filters.max_price;
      state.filters.shipping = false;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const {
  loadProducts,
  setGridView,
  setListView,
  updateSort,
  sortProducts,
  updateFilters,
  filterProducts,
  clearFilters,
  openSidebar,
  closeSidebar,
} = filterSlice.actions;

export default filterSlice.reducer;
