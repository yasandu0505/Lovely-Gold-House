import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Footer from "./components/footer.component";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "./components/notFound.component";
import Contact from "./components/contact.component";
import OurStory from "./components/ourstory.component";
import Jewellery from "./components/jewellery.component";
import BridalDresses from "./components/bridalDresses.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/jewellery/:category" element={<Jewellery />} />
          <Route path="/bridal-dresses/:category" element={<BridalDresses />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
