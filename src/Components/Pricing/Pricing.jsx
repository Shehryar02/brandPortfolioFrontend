import React from "react";
import './Pricing.css'

import { useNavigate } from "react-router-dom";

const Pricing = ({image, basicFeatures, premiumFeatures, title, basicPrice, premiumPrice }) => {

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
              <div className="col-md-5 col-5 py-3 priceBox-lightMode d-flex flex-column justify-content-between align-items-center">
                <div className="pricingHeading-lightMode">Basic Plan</div>

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

                <div className="pricingLower-lightMode d-flex flex-column justify-content-center align-items-center">
                  <h3 className="text-center">Prices start at <span> ${basicPrice}</span></h3>
                  <button onClick={() => handleContact(`Basic ${title} Plan`)} className="choosePlanBtn-lightMode mt-2">
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="col-md-5 col-5 py-3 priceBox-lightMode d-flex flex-column justify-content-between align-items-center">
                <div className="pricingHeading-lightMode">Premium Plan</div>

                <div className="pricingMiddle-lightMode py-2">
                  {premiumFeatures.map((feature, index) => (
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
                          // color: feature.status ? "#000000" : "#6c757d",
                        }}
                      ></i>
                    </div>
                  ))}
                </div>

                <div className="pricingLower-lightMode d-flex flex-column justify-content-center align-items-center">
                  <h3 className="text-center">Prices start at ${premiumPrice}</h3>
                  <button onClick={() => handleContact(`Premium ${title} Plan`)} className="choosePlanBtnPrem-lightMode mt-2">
                    Choose Plan
                  </button>
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
