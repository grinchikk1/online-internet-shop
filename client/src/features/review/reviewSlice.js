import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../data/fetchCart";
import { getUserToken } from "../../data/fetchUsers";

const token = getUserToken();

// const newCustomer = {
//   firstName: "Customer",
//   lastName: "Newone",
//   login: "Customer",
//   email: "customer@gmail.com",
//   password: "1111111",
//   telephone: "+380630000000",
//   gender: "male",
//   avatarUrl: "img/customers/023648.png",
//   isAdmin: true
// };

// axios
//   .post(`${url}/customers`, newCustomer)
//   .then((savedCustomer) => {
//     /*Do something with customer*/
//   })
//   .catch((err) => {
//     /*Do something with error, e.g. show error to customer*/
//   });
  
// const userData = {
//   loginOrEmail: "customer@gmail.com",
//   password: "1111111",
// };
// axios
//   .post(`${url}/customers/login`, userData)
//   .then((loginResult) => {
//     console.log(loginResult);
//   })
//   .catch((err) => {
//     /*Show error to customer, may be incorrect password or something else*/
//   });

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

      await axios.put(
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
      // return responseData;
      return { id: response.data._id, rating: rating }; // поставила замість   return responsedata; у формі розкоментувала
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
); 

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`${url}/comments/${id}`, {
        headers: apiHeaders, // Передаємо apiHeaders безпосередньо в запит
      });
      return result.data;
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
    status: false,
  },
  reducers: {},
  extraReducers: {
    [addReview.fulfilled]: (state) => {
      console.log("fulfilled");
      state.status = !state.status;
    },
    [addReview.pending]: () => console.log("pending"),
    [addReview.rejected]: () => console.log("rejected"),

    [deleteReview.pending]: () => console.log("pending"),
    [deleteReview.fulfilled]: (state) => {
      console.log("fulfilled");
      state.status = !state.status; // Або якщо потрібно змінити статус
    },
    [deleteReview.rejected]: () => console.log("rejected")
    },
  },
);

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

