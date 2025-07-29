import React from "react";


import "./AboutHome.css";
import { useNavigate } from "react-router-dom";

const AboutHome = () => {
  const navigate = useNavigate();

  const workingAboutMe = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const workingServiceBtnWebDev = () => {
    navigate("/services", { state: { scrollToId: "pricing1" } });
  };

  const workingServiceBtnAI = () => {
    navigate("/services", { state: { scrollToId: "pricing2" } });
  };

  const workingServiceBtnSEO = () => {
    navigate("/services", { state: { scrollToId: "pricing3" } });
  };

  const workingServiceBtnDigitMart = () => {
    navigate("/services", { state: { scrollToId: "pricing4" } });
  };

  const workingServiceBtnGraphicDesign = () => {
    navigate("/services", { state: { scrollToId: "pricing5" } });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-md-12 col-12">
              <h1 className="mainTitle-lightMode">
                Professionals dedicated to creating digital solutions with
                <span className="span-lightMode"> lasting impact </span>
              </h1>
              <p className="mt-4 heroBannerPara-lightMode">
                Focus on growing your business, smart digital
                solutions, enhance your visibility, and standout experiences that
                tailored for lasting impact.
              </p>
              <button
                onClick={workingAboutMe}
                className="mt-4 btns-lightMode d-flex align-items-center justify-content-center gap-2 px-3 py-2"
              >
                About Us
                <i className="iconFAwesom-lightMode fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="col-lg-4 col-md-12 mt-md-4 mt-lg-0 col-12 servicesColumn d-flex flex-column mt-md-0 mt-4 justify-content-end">
              <ul className="services-list-lightMode text-center">
                <h2 className="ourServicesListHeading d-flex align-items-center justify-content-center mt-md-0">
                  Our Services
                </h2>
                <li
                  className="d-flex align-items-center justify-content-center"
                  onClick={workingServiceBtnWebDev}
                >
                  Web Development
                </li>
                <li
                  className="d-flex align-items-center justify-content-center"
                  onClick={workingServiceBtnAI}
                >
                  AI Integration
                </li>
                <li
                  className="d-flex align-items-center justify-content-center"
                  onClick={workingServiceBtnSEO}
                >
                  SEO Optimization
                </li>
                <li
                  className="d-flex align-items-center justify-content-center"
                  onClick={workingServiceBtnDigitMart}
                >
                  Digital Marketing
                </li>
                <li
                  className="d-flex align-items-center justify-content-center m-0"
                  onClick={workingServiceBtnGraphicDesign}
                >
                  Graphic Designing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <ReviewHome /> */}
    </div>
  );
};

export default AboutHome;
