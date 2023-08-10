import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProductFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item._id !== productIdToRemove);
    },
    getTotalCartAmount: (state) => {
      let totalAmount = 0;

      for (const itemID in state.cart) {
        const item = state.cart[itemID];

        if (item.quantity > 0) {
          totalAmount += item.quantity * item.currentPrice;
        }
      }
      return totalAmount;
    },
    updateCartCount: (state, action) => {
      const { itemID, newCount } = action.payload;
      state.cart = { ...state.cart, [itemID]: newCount };
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  getTotalCartAmount,
  updateCartCount,
} = cartSlice.actions;

export default cartSlice.reducer;
