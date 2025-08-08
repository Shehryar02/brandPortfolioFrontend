import React, { useEffect } from "react";
import "./OurServices.css";

import SEO from "../../assets/Services/Crystal-Without Background/Search Engine Optimization.webp";
import AI from "../../assets/Services/Crystal-Without Background/Artificial Intelligence Logo.webp";
import WebDev from "../../assets/Services/Crystal-Without Background/Web Development Logo.webp";
import DigitMark from "../../assets/Services/Crystal-Without Background/Digital Marketing Logo.webp";
import Graphics from "../../assets/Services/Crystal-Without Background/Graphic Palette Logo.webp";
import Pricing from "../../Components/Pricing/Pricing";
import { useLocation, useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

const OurServices = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getinTouchClicked = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }; // wait for route to render

  useEffect(() => {
    const idToScroll = location.state?.scrollToId;
    if (idToScroll) {
      const element = document.getElementById(idToScroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>

                        <Helmet>
                    <title>Senvotex | Services</title>
                  </Helmet>


      <div className="container-fluid mt-3">
        {/* Heading */}
        <div className="aboveContactForm d-flex flex-column justify-content-center align-items-center mb-md-4 mb-4">
          <h1>Services</h1>
          <h2 className="text-center">
            Smart solutions to grow your business and ideas
          </h2>
        </div>

        <div className="container mb-5">
          <div className="row gap-md-1 gap-sm-3 gap-2 justify-content-center">
            <div className="col-md col-sm-3 col-5 serviceCard-lightMode d-flex flex-column justify-content-center align-items-center">
              <img loading="lazy" src={WebDev} className="img-fluid" alt="SEO" />
              <p className="text-center px-lg-4">Web Development</p>
              <ul className="serviceDetails-lightMode mb-0">
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Tailored Design
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Responsive UI/UX
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  E-Commerce Setup
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  CMS Solutions
                </li>
                <button
                  className="seePricingBtn-lightMode"
                  onClick={() =>
                    document
                      .getElementById("pricing1")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Pricing
                </button>
              </ul>
            </div>
            <div className="col-md col-sm-3 col-5 serviceCard-lightMode d-flex flex-column justify-content-center align-items-center">
              <img loading="lazy" src={AI} className="img-fluid" alt="SEO" />
              <p className="text-center px-lg-4">Artificial Intelligence</p>
              <ul className="serviceDetails-lightMode mb-0">
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Smart Forecasting
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  AI Chatbots
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Data Analysis
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Smart Automation
                </li>
                <button
                  className="seePricingBtn-lightMode"
                  onClick={() =>
                    document
                      .getElementById("pricing2")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Pricing
                </button>
              </ul>
            </div>
            <div className="col-md col-sm-3 col-5 serviceCard-lightMode d-flex flex-column justify-content-center align-items-center">
              <img loading="lazy" src={SEO} className="img-fluid" alt="SEO" />
              <p className="text-center px-lg-5">SE Optimization</p>
              <ul className="serviceDetails-lightMode mb-0">
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>Keyword
                  Research
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>On-Page
                  SEO
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Off-Page SEO
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Technical SEO
                </li>
                <button
                  className="seePricingBtn-lightMode"
                  onClick={() =>
                    document
                      .getElementById("pricing3")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Pricing
                </button>
              </ul>
            </div>

            {/* <div className="row justify-content-center gap-3 lastTwoServiceContainer-smallScreens">
              <div className="col-md col-sm-3 serviceCard-lightMode d-flex flex-column justify-content-center align-items-center">
                <img loading="lazy" src={image3} className="img-fluid" alt="SEO" />
                <p className="text-center">Search Engine Optimization</p>
                <ul className="serviceDetails-lightMode mb-0">
                  <li>Keyword Research</li>
                  <li>On-Page SEO</li>
                  <li>Off-Page SEO</li>
                  <li>Technical SEO</li>
                </ul>
                <button className="seePricingBtn-lightMode">See Pricing</button>
              </div>
              <div className="col-md col-sm-3 serviceCard-lightMode d-flex flex-column justify-content-center align-items-center">
                <img loading="lazy" src={image3} className="img-fluid" alt="SEO" />
                <p className="text-center">Search Engine Optimization</p>
                <ul className="serviceDetails-lightMode mb-0">
                  <li>Keyword Research</li>
                  <li>On-Page SEO</li>
                  <li>Off-Page SEO</li>
                  <li>Technical SEO</li>
                </ul>
                <button className="seePricingBtn-lightMode">See Pricing</button>
              </div>
            </div> */}

            <div className="col-md col-sm-3 col-5 serviceCard-lightMode lastTwoServiceContainer-bigScreen d-flex flex-column justify-content-center align-items-center">
              <img loading="lazy" src={DigitMark} className="img-fluid" alt="SEO" />
              <p className="text-center px-lg-5 px-xl-5 px-xxl-4">
                Digital Marketing
              </p>
              <ul className="serviceDetails-lightMode mb-0">
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Social Media Ads
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Email Campaigns
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  PPC Marketing
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Branding
                </li>
                <button
                  className="seePricingBtn-lightMode"
                  onClick={() =>
                    document
                      .getElementById("pricing4")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Pricing
                </button>
              </ul>
            </div>
            <div className="col-md col-sm-3 col-5 serviceCard-lightMode lastTwoServiceContainer-bigScreen d-flex flex-column justify-content-center align-items-center">
              <img loading="lazy" src={Graphics} className="img-fluid" alt="SEO" />
              <p className="text-center px-lg-4">Graphic Designing</p>
              <ul className="serviceDetails-lightMode mb-0">
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Logo Desingn
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Social Media Posts
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Brochures & Flyers
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Website Graphics
                </li>
                <button
                  className="seePricingBtn-lightMode"
                  onClick={() =>
                    document
                      .getElementById("pricing5")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Pricing
                </button>
              </ul>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="aboveContactForm d-flex flex-column justify-content-center align-items-center mb-md-4 mb-4">
          <h1>Pricing</h1>
          <h2 className="text-center">
            Flexible pricing, real value — built for your vision
          </h2>
        </div>

        {/* PRICING */}

        <div id="pricing1">
          <Pricing
            image={WebDev}
            basicFeatures={[
              { text: "Custom Website Development", status: true },
              { text: "WordPress Website Development", status: true },
              { text: "Responsive Web Design", status: true },
              { text: "E-Commerce Website Development", status: true },
              { text: "Website Redesign & Revamp", status: true },
              { text: "CMS Integration & Customization", status: true },
              { text: "Website Maintenance & Support", status: true },
              { text: "Security Setup & Malware Protection", status: true },
              { text: "Domain & Hosting Setup", status: true },
              { text: "SEO-Optimized Development", status: true },
              { text: "Website Speed & Performance Optimization", status: true },
            ]}
            title="Web Development"
            originalPrice="150"
            discountPrice="90"
          />
        </div>

        <div id="pricing2">
          <Pricing
            image={AI}
            basicFeatures={[
              { text: "AI Strategy Consultation", status: true },
              { text: "AI Model Training & Optimization", status: true },
              { text: "AI-Powered Chatbot Development", status: true },
              { text: "Machine Learning Model Development", status: true },
              { text: "Natural Language Processing (NLP)", status: true},
              { text: "Computer Vision Solutions", status: true },
              { text: "Predictive Analytics & Forecasting", status: true },
              { text: "AI Automation for Business Workflows", status: true },
              { text: "Recommendation Systems", status: true },
              { text: "Data Annotation & Labeling Services", status: true },
              { text: "Generative AI Solutions", status: true },
              { text: "Custom AI API Development", status: true },
            ]}
            title="Artificial Intelligence"
            originalPrice="150"
            discountPrice="90"
          />
        </div>

        <div id="pricing3">
          <Pricing
            image={SEO}
            basicFeatures={[
              { text: "Website SEO Audit", status: true },
              { text: "Keyword Research & Strategy", status: true },
              { text: "On-Page SEO Optimization", status: true },
              { text: "Technical SEO ", status: true },
              { text: "Off-Page SEO", status: true },
              { text: "Local SEO Optimization", status: true },
              { text: "Content Optimization & Strategy", status: true },
              { text: "SEO-Friendly Website Structure Setup", status: true },
              { text: "SEO for WordPress", status: true },
              { text: "Schema Markup & Structured Data Implementation", status: true },
              { text: "Competitor SEO Analysis", status: true },
              { text: "Monthly SEO Performance Reporting", status: true },
            ]}
            title="SEO Optimization"
            originalPrice="180"
            discountPrice="105"
          />
        </div>

        <div id="pricing4">
          <Pricing
            image={DigitMark}
            basicFeatures={[
              { text: "Social Media Marketing", status: true },
              { text: "Search Engine Marketing", status: true },
              { text: "Content Marketing", status: true },
              { text: "Email Marketing Campaigns", status: true },
              { text: "Affiliate Marketing", status: true },
              { text: "Conversion Rate Optimization", status: true },
              { text: "Online Reputation Management", status: true },
              { text: "Video Marketing & YouTube SEO", status: true },
              { text: "Marketing Strategy & Consulting", status: true },
              { text: "Paid Social Ads", status: true },
              { text: "Retargeting & Remarketing Ads", status: true },
              { text: "Lead Magnet Design", status: true },
            ]}
            title="Digital Marketing"
            originalPrice="120"
            discountPrice="70"
          />
        </div>

        <div id="pricing5">
          <Pricing
            image={Graphics}
            basicFeatures={[
              { text: "Logo Design", status: true },
              { text: "Brand Identity Design", status: true },
              { text: "Social Media Post Design", status: true },
              { text: "Business Card Design", status: true },
              { text: "Brochure & Flyer Design", status: true },
              { text: "Poster & Banner Design", status: true },
              { text: "Packaging & Label Design", status: true },
              { text: "Presentation Design", status: true },
              { text: "T-Shirt & Merchandise Design", status: true },
              { text: "Advertisement Design", status: true },
              { text: "Illustration & Icon Design", status: true },
              { text: "Photo Editing & Retouching", status: true },
            ]}
            title="Graphic Designing"
            originalPrice="100"
            discountPrice="60"
          />
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

export default OurServices;
