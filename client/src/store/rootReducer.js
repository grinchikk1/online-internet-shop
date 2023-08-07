import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoriteSlice";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // shop: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
