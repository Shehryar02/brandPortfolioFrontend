import React from "react";
import "./Work.css";

import Cards from "../../Components/Cards/Cards";
import PreFooter from "../../Components/PreFooter/PreFooter";
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

const Work = () => {
  const navigate = useNavigate();

    const getinTouchClicked = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }; // wait for route to render

  return (
    <div>

                        <Helmet>
                    <title>Senvotex | Work</title>
                  </Helmet>


      {/* Section Heading */}
      <div className="aboveContactForm d-flex flex-column justify-content-center align-items-center mt-3 mb-4 mb-4">
        <h1>Featured Solutions</h1>
        <h2 className="text-center">
          Innovative tech solutions built to overcome challenges and fuel your business growth
        </h2>
      </div>

      {/* <Cards /> */}
      <Cards />

      

      {/* Review Section */}
      <div className="aboveContactForm d-flex flex-column justify-content-center align-items-center mt-5 mb-4 px-3">
        <h1>Trusted by Clients</h1>
        <h2 className="text-center mb-4">
          Hear directly from those we’ve built solutions for
        </h2>

        <div className="row reviews-container d-flex flex-wrap justify-content-center gap-4">
          <div className="col-sm-4 review-card p-md-4 p-sm-3 p-4 shadow-sm">
            <p>
              “Your DR system streamlined our workflow with accuracy, precision and reliability. Great experience overall!”
            </p>
            <strong>- Anoosh, Biomedical Engineer</strong>
          </div>
          <div className="col-sm-4 review-card p-md-4 p-sm-3 p-4 shadow-sm">
            <p>
              “The poster and brochure designs perfectly matched our campaign vision. Creative and professional work!”
            </p>
            <strong>- PWFP, Wrestling Organization</strong>
          </div>
          <div className="col-sm-4 review-card p-md-4 p-sm-3 p-4 shadow-sm">
            <p>
              “Lofty Mediquip made ordering medical devices easy and secure. Smooth interface, quick search, and a seamless checkout!”
            </p>
            <strong>- Hamza Imran, Developer</strong>
          </div>
        </div>
      </div>


      <div className="cta-section text-center py-5 text-white mt-5">
        <h2 className="mb-3">Let's Build Something Great Together</h2>
        <p className="mb-4">
          Have a project in mind? I'm ready to bring your ideas to life with
          smart tech solutions.
        </p>
        <button onClick={getinTouchClicked} className="btn btn-light btn-lg">
          Get in Touch
        </button>
      </div>

    </div>
  );
};

export default Work;
