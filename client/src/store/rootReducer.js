import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoriteSlice";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import customerReducer from "../features/customer/customerSlice";
import authReducer from "../features/auth/authSlice";
import reviewReducer from "../features/review/reviewSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  shop: shopReducer,
  cart: cartReducer,
  customer: customerReducer,
  auth: authReducer,
  reviews: reviewReducer,
});

export default rootReducer;
