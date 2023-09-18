import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import CustomSnackbar from "../CustomSnackBar/CustomSnackBar";
import { addProduct } from "../../data/fetchProducts";
import validationSchema from "./formSettings";
import { fieldStyle, fieldContainerStyle, errorStyle } from "./style";

export default function AddProductTab() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageSeverenity, setMessageSeverenity] = useState("success");
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = async (values, { resetForm }) => {
    const product = {
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

    const response = await addProduct(product, token);

    if (response.status === 200) {
      setShowSnackbar(true);
      setMessageText("Product has been successfully!");
      setMessageSeverenity("success");
      setMessageTitle("Success");
    } else {
      setShowSnackbar(true);
      setMessageTitle("Error");
      setMessageText("Failed to add product");
      setMessageSeverenity("error");
    }
    resetForm();
  };

  return (
    <Container maxWidth="md" disableGutters sx={{ textAlign: "center" }}>
      <Formik
        initialValues={{
          imageUrls: "",
          quantity: "",
          name: "",
          currentPrice: "",
          previousPrice: "",
          categories: "",
          productMaterial: "",
          brand: "",
          manufacturerCountry: "",
          description: "",
          rating: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
            <ErrorMessage name="imageUrls" component="div" style={errorStyle} />
          </div>
          <div style={fieldContainerStyle}>
            <label htmlFor="quantity">Quantity:</label>
            <Field
              type="text"
              id="quantity"
              name="quantity"
              style={fieldStyle}
            />
            <ErrorMessage name="quantity" component="div" style={errorStyle} />
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
            Add Product
          </Button>
          <CustomSnackbar
            open={showSnackbar}
            severity={messageSeverenity}
            onClose={() => setShowSnackbar(false)}
            titleText={messageTitle}
            text={messageText}
          />
        </Form>
      </Formik>
    </Container>
  );
}
