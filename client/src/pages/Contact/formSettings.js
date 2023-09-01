import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export const getInitialValues = (token, user) => {
  if (!!token) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      subject: "",
      message: "",
    };
  } else {
    return {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };
  }
};
