import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../data/fetchCart";

const token = localStorage.getItem("token");

const apiHeaders = {
  Authorization: token,
};

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async ([productId, content, rating], { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}/comments`,
        { product: productId, content: content },
        {
          headers: apiHeaders, 
        }
      );

      const data = await axios.put(
        `${url}/comments/${response.data._id}`,
        {
          someCustomParam: {
            date: new Date().toLocaleDateString(),
            rating,
          },
        },
        {
          headers: apiHeaders,
        }
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
      const responce = await axios.get(`${url}/comments/product/${productId}`, {
        headers: apiHeaders,
      });

      console.log(responce.data);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);



export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${url}/comments/${id}`, {
        headers: apiHeaders, 
      });
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
      console.log("fulfilled");
      console.log(action.payload);
      state.reviews.push(action.payload);
    },
    [addReview.pending]: () => console.log("pending"),
    [addReview.rejected]: () => console.log("rejected"),

    [deleteReview.pending]: () => console.log("pending"),
    [deleteReview.fulfilled]: (state, action) => {
      console.log("fulfilled");
      console.log(action.payload);
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
    [deleteReview.rejected]: () => console.log("rejected"),

    [getReviews.pending]: () => console.log("pending"),
    [getReviews.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.reviews = action.payload;
      
    },
    [getReviews.rejected]: () => console.log("rejected"),
  },
});

export const { setReviewsData } = reviewsSlice.actions;
export default reviewsSlice.reducer;

