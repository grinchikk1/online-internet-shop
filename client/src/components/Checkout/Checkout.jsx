import { Grid, Container, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import { initalValues, validationSchema } from "./formSettings";
import { useStyles, theme } from "./CheckoutStyle";
import { ThemeProvider } from "@mui/material/styles";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../features/customer/customerSlice";
import { getTotalCartAmount } from "../../features/cart/cartSelector";
import { clearCart } from "../../features/cart/cartSlice";
import { setOrder } from "../../features/order/orderSlice";
// import nodemailer from "nodemailer";

function Checkout() {
  // const nodemailer = require("nodemailer");
  const classes = useStyles();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // async function sendEmail(to, subject, text) {
  //   let transporter = nodemailer.createTransport({
  //     service: "Gmail", // например, "Gmail"
  //     auth: {
  //       user: "your-email@example.com", // ваш адрес электронной почты
  //       pass: "your-email-password", // ваш пароль от почты
  //     },
  //   });

  //   let info = await transporter.sendMail({
  //     from: "your-email@example.com", // ваш адрес электронной почты
  //     to: "email user", // адрес получателя
  //     subject: "subject", // тема письма
  //     text: "text", // текст письма
  //   });

  //   console.log("Message sent: %s", info.messageId);
  // }

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector(getTotalCartAmount);
  const amounts = useSelector((state) => state.cart.amount);

  const handleSubmit = async (values, { resetForm }) => {
    const randomOrderNumber = Math.floor(Math.random() * 9000000) + 1000000;
    const orderDate = new Date();

    // const customerEmail = values.email;
    // const orderConfirmationSubject = "Order Confirmation";
    // const orderConfirmationText =
    //   "Your order has been successfully placed. Order details..."; // Здесь может быть более подробное сообщение о заказе

    // await sendEmail(
    //   customerEmail,
    //   orderConfirmationSubject,
    //   orderConfirmationText
    // );
    // const yourEmail = "your-email@example.com";
    // const orderDetailsSubject = "New Order";
    // const orderDetailsText = "A new order has been placed. Order details..."; // Здесь может быть более подробное сообщение о заказе

    // await sendEmail(yourEmail, orderDetailsSubject, orderDetailsText);

    const customer = await dispatch(
      addCustomer({
        ...values,
        orderNumber: randomOrderNumber,
        orderDate: orderDate.toISOString(),
      })
    );
    const newOrder = {
      customerId: customer.payload.orderNumber,
      deliveryAddress: {
        country: "Ukraine",
        city: customer.payload.city,
        address: customer.payload.streetAddress,
      },
      paymentInfo: customer.payload.paymentOption,
      status: "New order",
      email: customer.payload.email,
      mobile: customer.payload.phone,
      firstName: customer.payload.firstName,
      lastName: customer.payload.lastName,
      orderDate: customer.payload.orderDate,
      notes: customer.payload.notes,
      products: {},
      totalSum: totalAmount,
    };
    await cart.forEach((product) => {
      newOrder.products[product._id] = {
        name: product.name,
        currentPrice: product.currentPrice,
        amounts: amounts[product._id],
        itemNo: product.itemNo,
        productMaterial: product.productMaterial,
        _id: product._id,
      };
    });
    resetForm();
    setIsOrderPlaced(true);
    await dispatch(setOrder(newOrder));
    navigate("/order-confirmation");
    dispatch(clearCart());
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.formContainer}>
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
            <Form>
              <Grid container spacing={4}>
                <BillingDetails />
                <YourOrder
                  isSubmitting={isSubmitting}
                  handleSubmit={handleSubmit}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </Grid>
            </Form>
          )}
        </Formik>
        {isOrderPlaced && (
          <Alert severity="success" sx={{ width: "100%", marginTop: "15px" }}>
            Your order has been successfully placed
          </Alert>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Checkout;
