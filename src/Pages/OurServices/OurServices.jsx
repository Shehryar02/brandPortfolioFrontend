import React, { useEffect } from "react";
import "./OurServices.css";

import SEO from "../../assets/Services/Crystal-Without Background/Search Engine Optimization.png";
import AI from "../../assets/Services/Crystal-Without Background/Artificial Intelligence Logo.png";
import WebDev from "../../assets/Services/Crystal-Without Background/Web Development Logo.png";
import DigitMark from "../../assets/Services/Crystal-Without Background/Digital Marketing Logo.png";
import Graphics from "../../assets/Services/Crystal-Without Background/Graphic Palette Logo.png";
import image3 from "../../assets/Services/SEO_WBG2.png";
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
              <img src={WebDev} className="img-fluid" alt="SEO" />
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
              <img src={AI} className="img-fluid" alt="SEO" />
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
              <img src={SEO} className="img-fluid" alt="SEO" />
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
                <img src={image3} className="img-fluid" alt="SEO" />
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
                <img src={image3} className="img-fluid" alt="SEO" />
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
              <img src={DigitMark} className="img-fluid" alt="SEO" />
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
              <img src={Graphics} className="img-fluid" alt="SEO" />
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
            Clear pricing, real value — built for your vision
          </h2>
        </div>

        {/* PRICING */}

        <div id="pricing1">
          <Pricing
            image={WebDev}
            basicFeatures={[
              { text: "Responsive Design", status: true },
              { text: "Integrated Contact Form", status: true },
              { text: "CMS Integration", status: true },
              { text: "Custom Domain Configuration", status: true },
              { text: "Performance Enhancement (Basic)", status: true },
              { text: "1 Revision Cycle", status: true },
              { text: "Security Integration", status: false },
              { text: "Website Analytics Setup", status: false },
              { text: "E-commerce Functionality", status: false },
            ]}
            premiumFeatures={[
              { text: "Responsive Design", status: true },
              { text: "Integrated Contact Form", status: true },
              { text: "CMS Integration", status: true },
              { text: "Custom Domain Integration", status: true },
              { text: "Performance Enhancement (Advance)", status: true },
              { text: "3 Revision Cycles", status: true },
              { text: "Security Integration", status: true },
              { text: "Website Analytics Setup", status: true },
              { text: "E-commerce Functionality", status: true },
            ]}
            title="Web Development"
            basicPrice="259"
            premiumPrice="359"
          />
        </div>

        <div id="pricing2">
          <Pricing
            image={AI}
            basicFeatures={[
              { text: "AI Strategy Consultation", status: true },
              { text: "Data Cleaning and Preprocessing", status: true },
              { text: "Basic Workflow Automation", status: true },
              {
                text: "Essential NLP Tools like Text Summarization",
                status: true,
              },
              { text: "Ready-to-Use AI Chatbot", status: true },
              { text: "English Voice-to-Text Conversion", status: true },
              { text: "Predictive Modeling", status: false },
              { text: "Image and Video Enhancement", status: false },
              { text: "Custom AI Dashboard", status: false },
            ]}
            premiumFeatures={[
              { text: "AI Strategy Consultation", status: true },
              { text: "Data Cleaning and Preprocessing", status: true },
              { text: "Advanced Workflow Automation", status: true },
              { text: "Full Suite of NLP Tools", status: true },
              { text: "Custom AI Chatbot with Logic", status: true },
              { text: "Multilingual Voice-to-Text Conversion", status: true },
              { text: "Predictive Modeling", status: true },
              { text: "AI-Powered Image and Video Enhancement", status: true },
              { text: "Interactive AI Dashboard", status: true },
            ]}
            title="Artificial Intelligence"
            basicPrice="259"
            premiumPrice="359"
          />
        </div>

        <div id="pricing3">
          <Pricing
            image={SEO}
            basicFeatures={[
              { text: "Basic Keyword Research", status: true },
              { text: "On-Page SEO Optimization", status: true },
              { text: "Google My Business Setup", status: true },
              { text: "Mobile-Friendly SEO Check", status: true },
              { text: "1-Time SEO Audit", status: true },
              { text: "Technical SEO Fixes", status: false },
              { text: "Backlink Building", status: false },
              { text: "Monthly SEO Reporting", status: false },
              { text: "Local SEO Optimization", status: false },
            ]}
            premiumFeatures={[
              { text: "Advanced Keyword Research", status: true },
              { text: "On-Page, Off-Page & Technical SEO", status: true },
              { text: "GMB Setup & Local SEO Boost", status: true },
              { text: "Monthly SEO Reports + Action Plan", status: true },
              { text: "3-Times SEO Audit", status: true },
              { text: "Technical SEO Fixes", status: true },
              { text: "High-Quality Backlink Building", status: true },
              { text: "Monthly SEO Reporting", status: true },
              { text: "Mobile + Page Speed Optimization", status: true },
            ]}
            title="SEO Optimization"
            basicPrice="359"
            premiumPrice="459"
          />
        </div>

        <div id="pricing4">
          <Pricing
            image={DigitMark}
            basicFeatures={[
              { text: "Social Media Profile Setup", status: true },
              { text: "1-Platform Content Calendar", status: true },
              { text: "Basic Graphic Design Posts & Stories", status: true },
              { text: "1 Platform Ad Campaign", status: true },
              { text: "3 Email Newsletter / Month", status: true },
              { text: "Hashtag & Caption Strategy", status: true },
              { text: "Google Business Profile Setup", status: true },
              { text: "Monthly Performance Snapshot Report", status: false },
              { text: "Strategy & Growth Session", status: false },
              { text: "Lead Magnet Design", status: false },
            ]}
            premiumFeatures={[
              { text: "3-Platform Social Media Management", status: true },
              { text: "Content Calendar + Daily Posts", status: true },
              { text: "Custom Graphic + Video Creation", status: true },
              { text: "Targeted Ad Campaigns", status: true },
              { text: "Email Marketing Automation & Funnels", status: true },
              { text: "Influencer/Brand Collaboration Strategy", status: true },
              { text: "SEO Blog Posting (3/Month)", status: true },
              { text: "Real-Time Analytics Dashboard", status: true },
              { text: "Monthly Strategy & Growth Call", status: true },
              { text: "Lead Magnet & Landing Page Design", status: true },
            ]}
            title="Digital Marketing"
            basicPrice="199"
            premiumPrice="299"
          />
        </div>

        <div id="pricing5">
          <Pricing
            image={Graphics}
            basicFeatures={[
              { text: "Logo Design", status: true },
              { text: "Business Card Design", status: true },
              { text: "1 Social Media Post Design", status: true },
              { text: "Basic Brand Color Palette", status: true },
              { text: "Brand Guidelines (Text Only)", status: true },
              { text: "Brochure or Flyer Design", status: false },
              { text: "Letterhead Design", status: false },
              { text: "Mockups for Presentation", status: false },
            ]}
            premiumFeatures={[
              { text: "Logo Design with 3 variations", status: true },
              { text: "Business Card Design with 2 variations", status: true },
              { text: "3 Social Media Post Design", status: true },
              { text: "x2 Brand Color Palette", status: true },
              { text: "Brand Guidelines", status: true },
              { text: "Brochure or Flyer Design", status: true },
              { text: "Letterhead Design", status: false },
              { text: "Mockups for Presentation", status: false },
            ]}
            title="Graphic Designing"
            basicPrice="149"
            premiumPrice="249"
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
