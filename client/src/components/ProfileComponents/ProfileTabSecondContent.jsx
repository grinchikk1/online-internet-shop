import React, { useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import { getOrder } from "../../features/order/orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function ProfileTabSecondContent() {
  const token = useSelector((state) => state.auth.token);
  const orders = useSelector((state) => state.order.order);
  const orderStatus = useSelector((state) => state.order.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getOrder(token));
    }
  }, [dispatch, token]);

  if (orderStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (orderStatus === "failed") {
    return (
      <div>
        Error
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 33 } }}>
        No order has been made yet.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 33 }, p: 2 }}>
        Order History
      </Typography>
      <table style={{ width: "100%" }}>
        <thead
          style={{
            height: "50px",
          }}
        >
          <tr>
            <th>Order Number</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total Sum</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.orderNo}</td>
              <td>{formatDate(order.date)}</td>
              <td>{order.status}</td>
              <td>{order.totalSum + "$"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Divider sx={{ pt: 2 }} />
    </>
  );
}
