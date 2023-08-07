// favoriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favoritesList.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
