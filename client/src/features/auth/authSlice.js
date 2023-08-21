import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.error = null;

      // Збереження користувача в локальному сховищі
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;

      // Видалення користувача з локального сховища при виході
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, setError, logout } = authSlice.actions;

export default authSlice.reducer;
