import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../data/fetchCart";
import { getUserToken } from "../../data/fetchUsers";

const token = getUserToken();



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
          headers: apiHeaders, // Передаємо apiHeaders безпосередньо в запит
        }
      );

    const data =  await axios.put(
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
      
      return data.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
); 


export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (productId, { rejectWithValue }) => {
    try {
      const responce = await axios.get(`${url}/comments/product/${productId}`,
        {
        headers: apiHeaders,
      });
       
      
      
      console.log(responce.data);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);



//РОБОЧИЙ ВАРІАНТ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id, { rejectWithValue }) => {
    try {
       await axios.delete(`${url}/comments/${id}`, {
        headers: apiHeaders, // Передаємо apiHeaders безпосередньо в запит
      }
        
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.result);
    }
  }
);


//*******************************************************************************************

// export const deleteReview = createAsyncThunk(
//   "reviews/deleteReview",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${url}/comments/${id}`); // по цьому запиту можна отримати і id користувача і самого коментаря 

//       const commentUserId = response.data.customer; 

//       if (commentUserId === response.data._id) {

//         await axios.delete(`${url}/comments/${id}`,
//           {
//           headers: apiHeaders, 
//           }
//         );
//       }
    
//     } catch (error) {
//       return rejectWithValue(error.result);
//     }
//   }
// );





      
    

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    productId: null,
    content: "",
    // status: false,
    reviews: []
    // averageRating: 0, // Додайте поле для збереження середнього рейтингу
    // reviewCount: 0, // Додайте поле для збереження кількості відгуків
  },
  reducers: {
    setReviewsData: (state, action) => {
      state.reviews = action.payload;
    },
  },
  extraReducers: {
    [addReview.fulfilled]: (state, action) => {
      console.log("fulfilled");
      // state.status = !state.status;
      console.log(action.payload);
      state.reviews.push(action.payload)
    },
    [addReview.pending]: () => console.log("pending"),
    [addReview.rejected]: () => console.log("rejected"),

    [deleteReview.pending]: () => console.log("pending"),
    [deleteReview.fulfilled]: (state, action) => {
      console.log("fulfilled");
      console.log(action.payload);
      state.reviews = state.reviews.filter((review) => review._id !== action.payload);

      // state.status = !state.status; // Або якщо потрібно змінити статус
    },
    [deleteReview.rejected]: () => console.log("rejected"),

    [getReviews.pending]: () => console.log("pending"),
    [getReviews.fulfilled]: (state, action) => {
      console.log("fulfilled");
       state.reviews = action.payload;
      // state.status = !state.status; // Або якщо потрібно змінити статус
    },
    [getReviews.rejected]: () => console.log("rejected"),
  },
});

export const { setReviewsData } = reviewsSlice.actions;
export default reviewsSlice.reducer;

// export const updateReview = createAsyncThunk(
//   "reviews/updateReview",
//   async ([obj, productId], { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `${url}/comments/${productId}`,
//         {
//           someCustomParam: JSON.stringify(obj),
//         },
//         {
//           headers: {
//             Authorization:
//               // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTBiYzQyNGRmMjM4NGE4OGI2NDNiNSIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTI0NDk5MzYsImV4cCI6MTY5MjQ4NTkzNn0.-shFWL1J9awt4sOhRizEYXloQwCqsXlMoWWnCFwaCXw",
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTBiYzQyNGRmMjM4NGE4OGI2NDNiNSIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTI2MDExODIsImV4cCI6MTY5MjYzNzE4Mn0.WGKi2U7TRa4NjMhDvD2ySWNeK5cVUX51PGlli8MBxzI",
//             // потім замість токена поставити змінну
//           },
//         }
//       );

//       return response.data;

//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

//get +++++++++++++++++++
// await axios //get на відгуки по продукту
//    .get(`${url}/comments/product/${productId}`)
//    .then((comments) => {
//      setReviewsData(comments.data);
//    })
//    .catch((err) => {
//      console.log("catch");
//    });

      // const responsedata = await axios.put(

