import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favoritesList.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favoritesList));
    },
    removeFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        (favorite) => favorite._id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favoritesList));
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
