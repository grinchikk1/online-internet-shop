import React, { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { fieldStyle, fieldContainerStyle, errorStyle } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../data/fetchProducts";
import validationSchema from "./formSettings";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";
import { editProduct } from "../../features/product/productSlice";

export default function EditProductModal({ product, onClose }) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageSeverenity, setMessageSeverenity] = useState("success");
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleFieldChange = async (values) => {
    const productEdit = {
      ...product,
      imageUrls: values.imageUrls.split(","),
      quantity: parseInt(values.quantity, 10),
      name: values.name,
      currentPrice: parseFloat(values.currentPrice),
      previousPrice: parseFloat(values.previousPrice),
      categories: values.categories,
      productMaterial: values.productMaterial,
      brand: values.brand,
      manufacturerCountry: values.manufacturerCountry,
      description: values.description,
      rating: parseInt(values.rating, 10),
    };

    const res = await updateProduct(productEdit, token);

    if (res.status === 200) {
      dispatch(editProduct(res.data));
      setShowSnackbar(true);
      setMessageSeverenity("success");
      setMessageTitle("Success");
      setMessageText("Product updated successfully");
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setShowSnackbar(true);
      setMessageSeverenity("error");
      setMessageTitle("Error");
      setMessageText("Product updated is failed");
    }
  };

  return (
    <Container
      disableGutters
      maxWidth="md"
      style={{
        position: "fixed",
        width: "90%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        backgroundColor: "rgb(255, 255, 255)",
        p: 2,
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 5,
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: "20px",
          }}
        >
          &times;
        </Button>
        <Formik
          initialValues={{
            imageUrls: product.imageUrls.join(","),
            quantity: product.quantity.toString(),
            name: product.name,
            currentPrice: product.currentPrice.toString(),
            previousPrice: product.previousPrice.toString(),
            categories: product.categories,
            productMaterial: product.productMaterial,
            brand: product.brand,
            manufacturerCountry: product.manufacturerCountry,
            description: product.description,
            rating: product.rating.toString(),
          }}
          validationSchema={validationSchema}
          onSubmit={handleFieldChange}
        >
          <Form>
            <div style={fieldContainerStyle}>
              <label htmlFor="imageUrls">Image Urls:</label>
              <Field
                as="textarea"
                id="imageUrls"
                name="imageUrls"
                style={fieldStyle}
              />
              <ErrorMessage
                name="imageUrls"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="quantity">Quantity:</label>
              <Field
                type="text"
                id="quantity"
                name="quantity"
                style={fieldStyle}
              />
              <ErrorMessage
                name="quantity"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" style={fieldStyle} />
              <ErrorMessage name="name" component="div" style={errorStyle} />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="currentPrice">Current Price:</label>
              <Field
                type="text"
                id="currentPrice"
                name="currentPrice"
                style={fieldStyle}
              />
              <ErrorMessage
                name="currentPrice"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="previousPrice">Previous Price:</label>
              <Field
                type="text"
                id="previousPrice"
                name="previousPrice"
                style={fieldStyle}
              />
              <ErrorMessage
                name="previousPrice"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="categories">Categories:</label>
              <Field
                type="text"
                id="categories"
                name="categories"
                style={fieldStyle}
              />
              <ErrorMessage
                name="categories"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="productMaterial">Material:</label>
              <Field
                type="text"
                id="productMaterial"
                name="productMaterial"
                style={fieldStyle}
              />
              <ErrorMessage
                name="productMaterial"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="brand">Brand:</label>
              <Field type="text" id="brand" name="brand" style={fieldStyle} />
              <ErrorMessage name="brand" component="div" style={errorStyle} />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="manufacturerCountry">Country:</label>
              <Field
                type="text"
                id="manufacturerCountry"
                name="manufacturerCountry"
                style={fieldStyle}
              />
              <ErrorMessage
                name="manufacturerCountry"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="description">Description:</label>
              <Field
                type="text"
                id="description"
                name="description"
                style={fieldStyle}
              />
              <ErrorMessage
                name="description"
                component="div"
                style={errorStyle}
              />
            </div>
            <div style={fieldContainerStyle}>
              <label htmlFor="rating">Rating:</label>
              <Field type="text" id="rating" name="rating" style={fieldStyle} />
              <ErrorMessage name="rating" component="div" style={errorStyle} />
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                background: "#FFFFFF",
                color: "#000000",
                height: "53px",
                width: "35vw",
                border: "1px solid #000000",
                borderRadius: "4px",
                ":hover": {
                  background: "#000000",
                  color: "#FFFFFF",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              type="submit"
            >
              Update Product
            </Button>
          </Form>
        </Formik>
        <CustomSnackbar
          open={showSnackbar}
          severity={messageSeverenity}
          onClose={() => setShowSnackbar(false)}
          titleText={messageTitle}
          text={messageText}
        />
      </Box>
    </Container>
  );
}
