import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../../styles/style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, getUser } from "../../data/fetchUsers";
import { setUser, setToken, setError } from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const initialValues = {
    loginOrEmail: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      const user = await loginUser(values);

      if (user.token !== undefined) {
        const userData = await getUser(user.token);
        dispatch(setUser(userData));
        dispatch(setToken(user.token));
        navigate("/");
      } else {
        alert("Error logging in");
        dispatch(setError("Error logging in"));
      }
    } catch (error) {
      dispatch(setError("Error logging in"));
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
    return;
  }, [navigate, token]);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="loginOrEmail">Login or Email</label>
            <Field
              type="text"
              id="loginOrEmail"
              name="loginOrEmail"
              autoComplete="username"
            />
            <ErrorMessage
              name="loginOrEmail"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p className="login-text">
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#707070" }}>
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;

const validationSchema = Yup.object().shape({
  loginOrEmail: Yup.string().required("Login or Email is required"),
  password: Yup.string()
    .min(7, "Password must be between 7 and 30 characters")
    .max(30, "Password must be between 7 and 30 characters")
    .required("Password is required"),
});
