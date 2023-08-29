export const getTotalCartAmount = (state) => {
  return state.cart.cart.reduce((totalAmount, product) => {
    return totalAmount + product.currentPrice * state.cart.amount[product._id];
  }, 0);
};
