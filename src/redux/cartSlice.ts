import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../models';

type CartState = {
  items: CartItem[];
  totalAmount: number;
};

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
       
        existingItem.quantity += 1;
      } else {
       
        state.items.push({ ...action.payload, quantity: 1 });
      }

      //  (indirimli fiyat varsa, onu kullan)
      state.totalAmount = state.items.reduce(
        (total, item) => total + ((item.discountedPrice || item.price) * item.quantity),
        0
      );
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      
      state.totalAmount = state.items.reduce(
        (total, item) => total + ((item.discountedPrice || item.price) * item.quantity),
        0
      );
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Eğer miktar 1 ise, ürünü sepetten çıkar
        state.items = state.items.filter(item => item.id !== action.payload);
      }


      state.totalAmount = state.items.reduce(
        (total, item) => total + ((item.discountedPrice || item.price) * item.quantity),
        0
      );
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      state.totalAmount = state.items.reduce(
        (total, item) => total + ((item.discountedPrice || item.price) * item.quantity),
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
