import React from "react";
import "./About.css";

import ServiceOffering from "../../Components/ServiceOffering/ServiceOffering";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import PreFooter from "../../Components/PreFooter/PreFooter";

import companyLogoHard from '../../assets/Logo in White/Crystal Alternative shades/Hard2.png'
import companyLogoMedium from '../../assets/Logo in White/Crystal Alternative shades/Medium2.png'
import companyLogoLight from '../../assets/Logo in White/Crystal Alternative shades/Light2.png'

import personImg3 from "../../assets/About Page/man3.png";
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

const About = () => {
  const navigate = useNavigate();
  const getinTouchClicked = () => {
    navigate("/contact");
      setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // wait for route to render
    
  };
  return (
    <div className="mb-5">

                  <Helmet>
              <title>Senvotex | About</title>
            </Helmet>

      <div className="my-3 ">
        {/* Heading */}
        <div className="aboveContactForm d-flex flex-column justify-content-center align-items-center mb-md-5 mb-4">
          <h1>Our Identity</h1>
          <h2 className="text-center">
            Committed professionals delivering tailored digital experiences for your business
          </h2>
        </div>

        <div className="container-fluid aboutMainContanier-lightMode">
          <div className="container">
            <div className="row inverseMobile">
              <div className="col-12 col-sm-6 my-sm-5 my-3 d-flex justify-content-center">
                <img
                  src={companyLogoMedium}
                  className="img-fluid aboutPersonImage text-center"
                  alt=""
                />
              </div>
              <div className="col-12 col-sm-6 my-sm-5 d-flex">
                <div className="aboutText-lightMode d-flex flex-column flex-column justify-content-center align-items-center">
                  <h2>Our Mission</h2>
                  <p className="text-center">
                    At senvotex, creativity meets technology to shape digital
                    experiences that inspire and engage. With a passion for
                    innovation and an eye for detail, we craft impactful
                    solutions that bring ideas to life and leave a lasting
                    impression.
                  </p>
                  {/* <p className="text-center">
                    Our team is driven by a commitment to quality,
                    collaboration, and making every project a success story.
                    Let's build something amazing together.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceOffering />
      <WhyChooseUs />

      {/* <div className='my-5 pt-3'>
        <PreFooter />
      </div> */}

      <div className="cta-section-about text-center py-5 mt-5">
        <h1 className="mb-3">Let's Build Something Great Together</h1>
        <p className="mb-4">
          Have a project in mind? We're here to bring your ideas to life with
          smart tech solutions.
        </p>
        <button
          onClick={getinTouchClicked}
          // href="/contact"
          className="btn btn-light btn-lg"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default About;
