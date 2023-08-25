import React, { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import { getOrder } from "../../data/fetchOrder";
import { useSelector } from "react-redux";

export default function ProfileTabSecondContent() {
  const token = useSelector((state) => state.auth.token);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrder(token);
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [token]);

  if (orders.length === 0) {
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

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
