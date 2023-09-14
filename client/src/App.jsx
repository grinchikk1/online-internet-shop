import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./styles/App.scss";
import Footer from "./components/Footer/Footer";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Profile from "./pages/Profile/Profile";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
