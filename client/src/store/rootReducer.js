import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoriteSlice";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import customerReducer from "../features/customer/customerSlice";
import searchReducer from "../features/search/searchSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  shop: shopReducer,
  cart: cartReducer,
  customer: customerReducer,
  search: searchReducer,
});

export default rootReducer;
