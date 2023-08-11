export const getTotalCartAmount = (state) => {
  let totalAmount = 0;

  for (const product of state.cart.cart) {
    totalAmount += product.currentPrice * state.cart.amount[product._id];
  }
  return totalAmount;
};
