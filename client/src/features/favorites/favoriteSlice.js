// favoriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

export const favoriteSlice = createSlice({
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

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
