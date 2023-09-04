import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  city: Yup.string().required("City is required"),
  streetAddress: Yup.string().required("Street Address is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  paymentOption: Yup.string().required("Please select a payment option"),
});

export const getInitialValues = (token, user) => {
  if (!!token) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      city: "",
      streetAddress: "",
      phone: user.telephone,
      email: user.email,
      notes: "",
      paymentOption: "Paypal",
    };
  } else {
    return {
      firstName: "",
      lastName: "",
      city: "",
      streetAddress: "",
      phone: "",
      email: "",
      notes: "",
      paymentOption: "Paypal",
    };
  }
};
