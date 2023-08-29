import { Grid, Container, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import { initalValues, validationSchema } from "./formSettings";
import { useStyles } from "./CheckoutStyle";
import BillingDetails from "./BillingDetails";
import YourOrder from "./YourOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../features/customer/customerSlice";
import { getTotalCartAmount } from "../../features/cart/cartSelector";
import { clearCart } from "../../features/cart/cartSlice";
import { setOrder } from "../../features/order/orderSlice";
import { createOrder } from "../../data/fetchOrder";

import { deleteCart } from "../../data/fetchCart";

function Checkout() {
  const classes = useStyles();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector(getTotalCartAmount);
  const amounts = useSelector((state) => state.cart.amount);

  const handleSubmit = async (values, { resetForm }) => {
    const customer = await dispatch(
      addCustomer({
        ...values,
      })
    );
    const productNames = cart.map(
      (product) =>
        `<img src="${product.imageUrls[0]}" width="150" height="150" /> ${product.name} $ ${product.currentPrice}`
    );
    const productNamesList = productNames.join("</li><li>");

    const letterHtml = `
    <h1>Your order is placed.</h1>
    <h2>Hello, ${values.firstName}, ${values.lastName}</h2>
    <h3>Your products:</h3>
    <ul>
      <li >${productNamesList}</li>
    </ul>
    <h3>Your total summ: $ ${totalAmount}</h3>
    <h4>Your address: ${values.city}, ${values.streetAddress}</h4>
  `;

    const newOrderLocal = {
      customerId: userId,
      deliveryAddress: {
        country: "Ukraine",
        city: customer.payload.city,
        address: customer.payload.streetAddress,
      },
      status: "not shipped",
      email: customer.payload.email,
      mobile: customer.payload.phone,

      products: [],
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: letterHtml,
      totalSum: totalAmount,
    };

    const newOrderToServer = {
      customerId: userId,
      mobile: customer.payload.phone,
      email: customer.payload.email,
      letterSubject: "Thank you for order! You are welcome!",
      letterHtml: letterHtml,
      deliveryAddress: {
        country: "Ukraine",
        city: customer.payload.city,
        address: customer.payload.streetAddress,
      },
      status: "not shipped",
    };

    const newOrderForHTML = {
      ...newOrderLocal,
      orderNumber: Math.floor(Math.random() * 100),
      paymentInfo: customer.payload.paymentOption,
      notes: customer.payload.notes,
      orderDate: new Date().toLocaleString(),
      products: [],
    };

    cart.forEach((product) => {
      newOrderForHTML.products[product._id] = {
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
    await dispatch(setOrder(newOrderForHTML));

    if (!!token) {
      await createOrder(newOrderToServer);
      await deleteCart(token);
    } else {
      await createOrder(newOrderLocal);
    }

    navigate("/order-confirmation");
    await dispatch(clearCart());
  };
  return (
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
  );
}

export default Checkout;
