import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import { Typography, Container, Box, List } from "@mui/material";
import { TextField, Divider } from "@mui/material";

import CustomButton from "../CustomButton/CustomButton";

import Review from "../Review/Review";
import Rating from "@mui/material/Rating";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addReview, deleteReview } from "../../features/review/reviewSlice";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";

const validationSchema = Yup.object().shape({
  review: Yup.string().required("Review is required"),
});

function ReviewForm({ productId }) {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);
  const { user } = useSelector((state) => state.auth);

  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const [SnackbarDel, setSnackbarDel] = useState(false);
  const [SnackbarSignUp, setSnackbarSignUp] = useState(false);

  const handlePostReview = async (submitForm) => {
    try {
      await submitForm();
    } catch (error) {
      console.error(error);
    }
  };

  const isMobile = useMediaQuery("(max-width: 900px)");

  const buttonStyles = isMobile
    ? {
        display: "flex",
        justifyContent: "center",
        marginTop: "35px",
        marginBottom: "80px",
      }
    : {
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "35px",
        marginBottom: "80px",
      };

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
          padding: "0",
          order: "2",
        }}
      >
        <Typography variant="h6" sx={{ color: "#A18A68" }}>
          Add a Review
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: "400", color: "#707070" }}
        >
          To leave a review, you need to sign up on the site. Required fields
          are marked *
        </Typography>

        <Formik
          initialValues={{
            review: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (user) {
              resetForm();
              dispatch(addReview([productId, values.review, ratingValue]));
              setSubmitting(false);
            } else {
              setSnackbarSignUp(true);
            }
          }}
        >
          {({ isSubmitting, submitForm }) => (
            <>
              {" "}
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
                  rows={3}
                />

                <ErrorMessage
                  name="review"
                  component="div"
                  style={{ marginTop: "-55px" }}
                />

                <Rating
                  sx={{ marginTop: "46px" }}
                  name="rating"
                  value={ratingValue}
                  onChange={handleRatingChange}
                  precision={0.5}
                />

                <CustomSnackbar
                  open={SnackbarSignUp}
                  onClose={() => setSnackbarSignUp(false)}
                  severity="info"
                  titleText="Info"
                  text="Before leaving a review you need to Sign up"
                />
                <CustomSnackbar
                  open={SnackbarDel}
                  onClose={() => setSnackbarDel(false)}
                  severity="info"
                  titleText="Info"
                  text="It`s not yours review, you can`t delete it"
                />

                <Box sx={buttonStyles}>
                  <CustomButton
                    type="submit"
                    value="Submit"
                    onClick={() => handlePostReview(submitForm)}
                    disabled={isSubmitting}
                  />
                </Box>
              </Form>
            </>
          )}
        </Formik>
      </Container>

      <Container
        sx={{
          maxWidth: "580px",
          padding: "0",
          order: "1",
          maxHeight: "600px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            color: "#A18A68",
          }}
        >
          Reviews({reviews.length})
        </Typography>
        {reviews.length === 0 ? (
          <Typography
            sx={{
              textAlign: "left",
              color: "#707070",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            Your review can be the first...
          </Typography>
        ) : (
          <List
            sx={{
              maxWidth: "510px",
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "left",
              textAlign: "left",
            }}
          >
            {reviews.map((review, index) => (
              <React.Fragment key={index}>
                <Review
                  name={review.customer.firstName}
                  date={review?.someCustomParam?.date}
                  review={review.content}
                  rating={review?.someCustomParam?.rating}
                  onDelete={() => {
                    if (
                      user &&
                      (user.isAdmin || user._id === review.customer._id)
                    ) {
                      dispatch(deleteReview(review._id));
                    } else {
                      setSnackbarDel(true);
                    }
                  }}
                />
                {index !== reviews.length - 1 && (
                  <Divider sx={{ width: "auto", marginBottom: "40px" }} />
                )}
              </React.Fragment>
            ))}
          </List>
        )}
      </Container>
    </Container>
  );
}

export default ReviewForm;
