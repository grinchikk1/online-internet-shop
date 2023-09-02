import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../features/order/orderSlice";
import OrderItemsConfirm from "./OrderItemConfirm";
import useStyles from "./OrderConfirmationStyle";
import CircularLoader from "../../components/Loader/Loader";

const OrderConfirmation = () => {
  const token = useSelector((state) => state.auth.token);
  const orders = useSelector((state) => state.order.order);
  const orderStatus = useSelector((state) => state.order.status);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [localOrder, setLocalOrder] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        await dispatch(getOrder(token));
      } else {
        const getLocal = JSON.parse(localStorage.getItem("order"));
        if (getLocal !== null) {
          setLocalOrder(getLocal);
        }
      }
    };

    fetch();
  }, [dispatch, token]);

  if (orderStatus === "loading" || orders.length === 0) {
    return <CircularLoader />;
  }

  if (orderStatus === "failed") {
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", pt: 4 }}>
        <Typography variant="h5">
          Oops.. Something went wrong. Try again later
        </Typography>
      </Container>
    );
  }

  if (!orders) {
    return (
      <Container maxWidth="lg" sx={{ textAlign: "center", pt: 4 }}>
        <Typography variant="h5">Order data is not available.</Typography>
      </Container>
    );
  }

  const order = orders
    ? orders[orders.length - 1]
    : localOrder[localOrder.length - 1];

  const amountsArray = order.products.map((productId) => ({
    productId: productId._id,
    amount: productId.cartQuantity,
  }));

  const amountsObject = {};
  amountsArray.forEach((item) => {
    amountsObject[item.productId] = item.amount;
  });

  const date = new Date(order.date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <Container maxWidth="lg">
      <div className={classes.orderMain}>
        <div className={classes.orderDetails}>
          <div className={classes.orderMainHeader}>Order Details</div>
          <div className={classes.orderDetailsBlock}>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                ORDER NUMBER
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.orderNo}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>EMAIL</Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.email}
              </Typography>
            </div>
            {/* <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                PAYMENT METHOD
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.paymentInfo}
              </Typography>
            </div> */}
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                ORDER DATE
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {formattedDate}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                DELIVERY OPTIONS
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                Standard delivery
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                DELIVERY ADDRESS
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.deliveryAddress.country},{order.deliveryAddress.city},
                {order.deliveryAddress.address}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                CONTACT NUMBER
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.mobile}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>NOTES</Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.notes ? order.notes : "-"}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.orderSummary}>
          <div className={classes.orderMainHeader}>Order Summary</div>
          <div className={classes.orderSummaryBlock}>
            <div className={classes.orderSummaryHeader}>
              <div>PRODUCT</div>
              <div>TOTAL</div>
            </div>
            <div className={classes.orderSummaryItems}>
              <OrderItemsConfirm cart={order} amounts={amountsObject} />
            </div>
            <div className={classes.orderSummaryTotal}>
              <div>TOTAL</div>
              <div>${order.totalSum}</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrderConfirmation;
