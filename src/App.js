import React from "react";
import Home from "./components/Home"
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} >
            <Route path="/services/product" element={<Product />}>
              <Route path="/services/product/product1" element={<Product1 />} />
              <Route path="/services/product/product1/product2" element={<Product2 />} />
              <Route />
            </Route >
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={< Movies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router >

    </>
  )
};
export default App;