import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoriteSlice";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import reviewReducer from "../features/review/reviewSlice";
import customerReducer from "../features/customer/customerSlice";
import searchReducer from "../features/search/searchSlice";
import authReducer from "../features/auth/authSlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product/productSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  shop: shopReducer,
  cart: cartReducer,
  reviews: reviewReducer,
  customer: customerReducer,
  search: searchReducer,
  auth: authReducer,
  order: orderReducer,
  products: productReducer,
});

export default rootReducer;
