import React from "react";
import './Pricing.css'

import { useNavigate } from "react-router-dom";

const Pricing = ({image, originalPrice, discountPrice, basicFeatures, premiumFeatures, title, basicPrice, premiumPrice }) => {

  const navigate = useNavigate();
  const handleContact = (planName) => {
    navigate(`/contact?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 pricingServiceImage-lightMode mb-md-0 mb-sm-3 mb-3 d-flex flex-column justify-content-center align-items-center">
                <img src={image} className="img-fluid" alt="" />
                <h3 className="pricingImage-title text-center">{title}</h3>
          </div>
          <div className="col-md-8">
            <div className="row gap-md-3 gap-sm-3 gap-2 justify-content-md-end justify-content-center">

              {/* BASIC SECTION */}

              <div className="col-md-5 col-5 py-3 priceBox-lightMode d-flex flex-column justify-content-between align-items-center">
                <div className="pricingHeading-lightMode">Core Services</div>

                <div className="pricingMiddle-lightMode py-2">
                  {basicFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between align-items-center mb-3 mt-3"
                    >
                      <h6 className="m-0">{feature.text}</h6>
                      <i
                        className={`fa-solid ${
                          feature.status ? "fa-check" : "fa-xmark"
                        } cross-check-icons`}
                        style={{
                          color: feature.status ? "green" : "red",
                        }}
                      ></i>
                    </div>
                  ))}
                </div>

                {/* <div className="pricingLower-lightMode d-flex flex-column justify-content-center align-items-center">
                  <h3 className="text-center">Prices start at <span> ${basicPrice}</span></h3>
                  <button onClick={() => handleContact(`Basic ${title} Plan`)} className="choosePlanBtn-lightMode mt-2">
                    Choose Plan
                  </button>
                </div> */}
              </div>

              {/* PREMIUM SECTION */}

              <div className="col-md-5 col-5 py-3  d-flex flex-column justify-content-center align-items-center">
                  <div className="pricebox_premium">
                  <div className="pricingLastSection_main">
                    <h2 className="pricingLastSection m-0">Our pricing is flexible and based on your selected service</h2>
                    <h6 className="pricingLastSection_2 mb-0 mt-3 d-flex justify-content-start align-items-center">
                      Starting from <span className="discountTag_Prev"><del>${originalPrice}</del></span> <span className="discountTag text-center">JUST ${discountPrice}</span>
                    </h6>
                  </div>

                  <div className="dicsountTagLower discount-button">
                    <h3 className="m-0 text-center">Flat 40% Off on All Services</h3>
                  </div>

                  <div className="dicsountTagLower_2 contact-button">
                    <h3 className="m-0 text-center">Contact Us</h3>
                  </div>

              </div>
              </div>



              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
