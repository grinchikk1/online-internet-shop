import React from "react";
import  { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup"; 

import { Typography, Container, Box, List} from "@mui/material";
import { TextField, Divider } from "@mui/material";

import CustomButton from "../CustomButton/CustomButton";


import Review from "../Review/Review";
import Rating from "@mui/material/Rating";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addReview, deleteReview } from "../../features/review/reviewSlice";

import { url } from "../../data/fetchCart";
import axios from "axios";


const validationSchema = Yup.object().shape({
 
  review: Yup.string().required("Review is required"),
});



function ReviewForm({productId}) {


  const dispatch = useDispatch()
  const { status } = useSelector(state => state.reviews)



   const [reviewsData, setReviewsData] = useState([]);
    
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
  setRatingValue(newValue);
};
  useEffect(() => {
     axios                                                 //get на відгуки по продукту
      .get(`${url}/comments/product/${productId}`)
      .then(comments => {
      
        setReviewsData(comments.data)
        
      })
  .catch(err => {console.log("catch");
   
  });
  }, [status]);

  useEffect(() => {
  axios                                                 //get на відгуки по продукту
      .get(`${url}/comments/product/${productId}`)
      .then(comments => {
      
        setReviewsData(comments.data)
        
      })
  .catch(err => {console.log("catch");
   
  });
  },[]  )
  
  const handlePostReview = async (submitForm) => {
    try {
    
    await submitForm(); // Викликаємо функцію submitForm для обробки форми Formik
  } catch (error) {
    // Обробляйте помилки тут, якщо є потреба
    console.error(error);
  }
};
  
  const isMobile = useMediaQuery("(max-width: 900px)");
  
  return (
    
   
    <Container
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        marginTop: "42px",
        padding: "0",
      }}
    >
   
   
      <Container
        sx={{
          maxWidth: "580px",
          order: isMobile ? 2 : 1,
          padding: "0",
          order: "2"
        }}
      >
       
          <Typography variant="h6" sx={{color: "#A18A68"}}>Add a Review</Typography>
          <Typography sx={{fontSize: "13px", fontWeight: "400", color: "#707070" }}>Your email address will not be published. Required fields are marked *</Typography>
      <Formik
        initialValues={{
          
          review: ""
        }}
       
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          
          resetForm();
          dispatch(addReview([productId, values.review, ratingValue]))
          setSubmitting(false);
        }}
       
      >
        {({ isSubmitting, submitForm  }) => (
          <Form>
          <Field
               as={TextField}
              type="text"
              name="review"
              required
              label="Your Review"
              variant="standard"
              sx={{
              fontSize: "12px",
              width: "100%",
              marginTop: "50px",
              
              }}
              
              multiline
              rows={4}
            />
             <ErrorMessage name="review" component="div" style={{marginTop:"-55px"}} />
          

            <Rating sx={{marginTop: "46px"}}
              name="rating"
              value={ratingValue}
              onChange={handleRatingChange}
              precision={0.5}
            />
            <Box  sx={{display:"flex", maxWidth:"40%", justifyContent:"flex-start", marginTop:"35px", marginBottom:"80px"}}>
              <CustomButton type="submit" value="Submit" onClick={() => handlePostReview(submitForm)} disabled={isSubmitting} />
            </Box>
          </Form>
        )}
      </Formik>
      </Container>

     
       <Container
        sx={{
          maxWidth: "580px",
          order: isMobile ? 1 : 2,
          padding: "0",
          order: "1",
          maxHeight: "600px",
          overflowY: "auto",
        }}
      >
 <Typography variant="h6" sx={{ textAlign: "left", color: "#A18A68" }}>Reviews({reviewsData.length})</Typography>
      <List sx={{ maxWidth: "510px", margin: "0 auto", alignItems: "center", justifyContent: "left", textAlign: "left" }}>
        {reviewsData.map((review, index) => (
          <React.Fragment key={index}>

            <Review name={review.customer.firstName} date={review?.someCustomParam?.date} review={review.content} rating={review?.someCustomParam?.rating}
               onDelete={() => dispatch(deleteReview([review._id]))}/>
            {index !== reviewsData.length - 1 && <Divider sx={{ width: "auto", marginBottom: "40px" }} />}
          </React.Fragment>
        ))}
      </List>
 </Container>
      
    </Container>
  );
}


export default ReviewForm;

