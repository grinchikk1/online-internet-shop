export class CartLocalStorageHelper {
  static getCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const amount = JSON.parse(localStorage.getItem("amount") || "{}");
    return {
      cart,
      amount,
    };
  }
  static addProductToCart(product, value = 1) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let amount = JSON.parse(localStorage.getItem("amount") || "{}");
    if (cart.find((p) => p._id === product._id)) {
      amount[product._id] = amount[product._id] + value;
    } else {
      cart = [...cart, product];
      amount[product._id] = value;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("amount", JSON.stringify(amount));
  }
  static removeProductFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let amount = JSON.parse(localStorage.getItem("amount") || "{}");
    cart = cart.filter((item) => item._id !== id);
    amount[id] = undefined;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("amount", JSON.stringify(amount));
  }
  static updateCartCount({ itemID, newCount }) {
    let amount = JSON.parse(localStorage.getItem("amount") || "{}");
    amount[itemID] = newCount;
    localStorage.setItem("amount", JSON.stringify(amount));
  }
  static resetCart() {
    localStorage.setItem("cart", "[]");
    localStorage.setItem("amount", "{}");
  }
}
