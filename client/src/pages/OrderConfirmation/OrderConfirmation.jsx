import { Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import OrderItems from "../Cart/OrderItem";
import useStyles from "./OrderConfirmationStyle";
const OrderConfirmation = () => {
  const classes = useStyles();

  const order = useSelector((state) => state.order.order);

  const amountsArray = Object.keys(order.products).map((productId) => ({
    productId,
    amount: order.products[productId].amounts,
  }));

  const amountsObject = {};
  amountsArray.forEach((item) => {
    amountsObject[item.productId] = item.amount;
  });

  return (
    <Container maxWidth="lg">
      <div className={classes.orderHeader}>
        <svg
          className={classes.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.7301 13.35L14.3501 7.73004C14.5342 7.53689 14.5342 7.23319 14.3501 7.04004L13.8201 6.51004C13.6257 6.31947 13.3145 6.31947 13.1201 6.51004L8.3801 11.25L6.8801 9.76004C6.78936 9.66336 6.66268 9.60852 6.5301 9.60852C6.39751 9.60852 6.27083 9.66336 6.1801 9.76004L5.6501 10.29C5.55544 10.3839 5.5022 10.5117 5.5022 10.645C5.5022 10.7784 5.55544 10.9062 5.6501 11L8.0301 13.35C8.12083 13.4467 8.24751 13.5016 8.3801 13.5016C8.51268 13.5016 8.63936 13.4467 8.7301 13.35Z"
            fill="#A18A68"
          />
        </svg>{" "}
        We’ve received your order
      </div>
      <div className={classes.orderMain}>
        <div className={classes.orderDetails}>
          <div className={classes.orderMainHeader}>Order Details</div>
          <div className={classes.orderDetailsBlock}>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                ORDER NUMBER
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.orderNumber}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>EMAIL</Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.email}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                PAYMENT METHOD
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.paymentInfo}
              </Typography>
            </div>
            <div className={classes.orderDetailsItem}>
              <Typography className={classes.detailsTitle}>
                ORDER DATE
              </Typography>

              <Typography className={classes.detailsSubtitle}>
                {order.orderDate}
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
              <OrderItems
                cart={Object.values(order.products)}
                amounts={amountsObject}
              />
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
