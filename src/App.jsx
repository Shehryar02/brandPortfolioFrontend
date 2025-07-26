import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import OurServices from "./Pages/OurServices/OurServices";
import Work from "./Pages/Work/Work";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import LegalNotice from "./Pages/LegalNotice/LegalNotice"

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    // <Router>
    <>
      {/* Navbar is placed here bcz navigation will work only when useNavigate or Link is used inside Router */}
      <div className=" py-2 sticky-top bg-white  shadowNavbar navCol">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/work" element={<Work />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
      </Routes>
    {/* </Router> */}
    </>
  );
};

export default App;
