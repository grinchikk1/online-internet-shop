import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";

import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <Link to="/"> Home</Link>
        <br />
        <Link to="/about"> About</Link>
        <br />
        <Link to="/cart"> Cart</Link>
        <br />
        <Link to="/contact"> Contact</Link>
        <br />
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
