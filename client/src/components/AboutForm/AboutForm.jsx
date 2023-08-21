import React from "react";
import  { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup"; 

import { Typography, Container, Box, List} from "@mui/material";
import { TextField, FormControlLabel, Checkbox, Divider } from "@mui/material";

import CustomButton from "../CustomButton/CustomButton";

import Comment from "../Comment/Comment";


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  website: Yup.string().url("Invalid URL"),
  comment: Yup.string().required("Comment is required"),
});



function ReplyForm() {

  const [commentsData, setCommentsData] = useState([]);
  
  
  
  useEffect(() => {
    console.log("commentsData has been updated:", commentsData);
  }, [commentsData]);
  
  const handlePostComment = async (submitForm) => {
  try {
    await submitForm(); // Викликаємо функцію submitForm для обробки форми Formik
  } catch (error) {
    // Обробляйте помилки тут, якщо є потреба
    console.error(error);
  }
};
  
  
  return (
    <Container sx={{ maxWidth: "720px", marginTop: "50px", textAlign: "left", justifyContent: "left" }}>
      <Typography variant="h5">Leave a reply</Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          website: "",
          comment: ""
        }}
       
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newComment = {
            name: values.name,
            email: values.email,
            website: values.website,
            comment: values.comment,
            date: new Date().toLocaleDateString(),
          };
          setCommentsData([...commentsData, newComment]);
          resetForm();
          setSubmitting(false);
        }}
       
      >
        {({ isSubmitting, submitForm  }) => (
          <Form>

          <Field
               as={TextField}
              type="text"
              name="name"
              required
              label="Enter your name"
              variant="standard"
             sx={{ fontSize: "16px", width: "100%", marginTop: "50px", fontFamily: "DM Sans, sans-serif" }}
              
            />
             <ErrorMessage name="name" component="div" />
            <Field
               as={TextField}
              type="email"
              name="email"
              required
              label="Enter your Email"
              variant="standard"
             sx={{ fontSize: "16px", width: "100%", marginTop: "50px", fontFamily: "DM Sans, sans-serif" }}
              
            />
            <ErrorMessage name="email" component="div" />

            <Field
               as={TextField}
              type="text"
              name="website"
            
              label="Enter your Website"
              variant="standard"
              sx={{ fontSize: "16px", width: "100%", marginTop: "50px", fontFamily: "DM Sans, sans-serif", marginBottom: "20px" }}
           
            />
           
            <FormControlLabel control={<Checkbox defaultChecked />} sx={{ display: "flex", justifyContent: "left", marginBottom: "54px" }}
              label="Save my name, email, and website in this browser for the next time I comment" />
            
              <Field
               as={TextField}
              type="text"
              name="comment"
              required
              label="Your Comment"
              variant="standard"
              sx={{
              fontSize: "16px",
              width: "100%",
              marginTop: "50px",
                marginBottom: "60px",
              
          
              }}
              
              multiline
              rows={4}
            />
             <ErrorMessage name="comment" component="div" style={{marginTop:"-55px"}} />

            <Box display="flex" justifyContent="flex-start" maxWidth="40%" sx={{marginTop:"55px", marginBottom:"80px"}}>
              <CustomButton type="submit" value="POST COMMENT" onClick={() => handlePostComment(submitForm)} disabled={isSubmitting} />
            </Box>
          </Form>
        )}
      </Formik>

 <Typography variant="h4" sx={{ textAlign: "left" }}>Comments({commentsData.length})</Typography>
      <List sx={{ maxWidth: "672px", bgcolor: "background.paper", margin: "70px auto 0 auto", alignItems: "center", justifyContent: "left", textAlign: "left" }}>
        {commentsData.map((comment, index) => (
          <React.Fragment key={index}>
            <Comment name={comment.name} date={comment.date} comment={comment.comment} />
            {index !== commentsData.length - 1 && <Divider sx={{ width: "auto", marginBottom: "40px" }} />}
          </React.Fragment>
        ))}
      </List>

      
    </Container>
  );
}


export default ReplyForm;