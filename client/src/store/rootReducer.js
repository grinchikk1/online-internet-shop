import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoriteSlice";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import reviewReducer from "../features/review/reviewSlice"
import customerReducer from "../features/customer/customerSlice";
import authReducer from "../features/auth/authSlice";
import reviewReducer from "../features/review/reviewSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  shop: shopReducer,
  cart: cartReducer,
  reviews: reviewReducer,
  customer: customerReducer,
  auth: authReducer,
});

export default rootReducer;
