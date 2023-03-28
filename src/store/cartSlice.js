import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  return cart ? JSON.parse(localStorage.getItem('cart')) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, mainColor: color, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    },

    removeItem: (state, action) => {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = tempCart;
    },

    toggleAmount: (state, action) => {
      const { id, value } = action.payload;
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount;
          if (value === 'inc') {
            newAmount++;
            newAmount = Math.min(newAmount, item.max);
          } else if (value === 'dec') {
            newAmount--;
            newAmount = Math.max(1, newAmount);
          }
          return { ...item, amount: newAmount };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    },
    countCartTotals: (state) => {
      let totalItems = 0;
      let totalAmount = 0;

      state.cart.forEach((cartItem) => {
        totalItems += cartItem.amount;
        totalAmount += cartItem.price * cartItem.amount;
      });

      state.total_items = totalItems;
      state.total_amount = totalAmount;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeItem,
  toggleAmount,
  clearCart,
  countCartTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
