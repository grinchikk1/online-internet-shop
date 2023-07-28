import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./styles/App.scss";
import ShopContextProvider from "./components/context/shop-context";

function App() {
  return (
    <div className="wrapper">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
