import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
    },
  },
  reducers: {
    loadProducts: (state, action) => {
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      state.all_products = [...action.payload];
      state.filtered_products = [...action.payload];
      state.filters.max_price = maxPrice;
      state.filters.price = maxPrice;
    },
    setGridView: (state, action) => {
      state.grid_view = true;
    },
    setListView: (state, action) => {
      state.grid_view = false;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    sortProducts: (state, action) => {
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];

      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      state.filtered_products = tempProducts;
    },
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    },
    filterProducts: (state, action) => {
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempProducts = [...all_products];
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
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
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
    clearFilters: (state, action) => {
      state.filters.text = '';
      state.filters.company = 'all';
      state.filters.category = 'all';
      state.filters.color = 'all';
      state.filters.price = state.filters.max_price;
      state.filters.shipping = false;
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
} = filterSlice.actions;

export default filterSlice.reducer;
