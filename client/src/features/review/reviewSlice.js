import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../../data/sendRequest";

const token = localStorage.getItem("token");

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async ([productId, content, rating], { rejectWithValue }) => {
    try {
      const response = await sendRequest(
        "post",
        "/comments",
        {
          product: productId,
          content,
        },
        token
      );

      const data = await sendRequest(
        "put",
        `/comments/${response.data._id}`,
        {
          someCustomParam: {
            date: new Date().toLocaleDateString(),
            rating,
          },
        },
        token
      );

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await sendRequest(
        "get",
        `/comments/product/${productId}`,
        null,
        token
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id, { rejectWithValue }) => {
    try {
      await sendRequest("delete", `/comments/${id}`, null, token);
      return id;
    } catch (error) {
      return rejectWithValue(error.result);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    productId: null,
    content: "",
    reviews: [],
  },
  reducers: {
    setReviewsData: (state, action) => {
      state.reviews = action.payload;
    },
  },
  extraReducers: {
    [addReview.fulfilled]: (state, action) => {
      state.reviews.push(action.payload);
    },
    [deleteReview.fulfilled]: (state, action) => {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
    [getReviews.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setReviewsData } = reviewsSlice.actions;
export default reviewsSlice.reducer;
