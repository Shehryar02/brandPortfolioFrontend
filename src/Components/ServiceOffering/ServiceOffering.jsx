import React from "react";
import "./ServiceOffering.css";

import { BsCodeSlash } from "react-icons/bs";
import { MdMemory } from "react-icons/md";
import { BsSearch } from "react-icons/bs"; // replaces FaSearch
import { MdCampaign } from "react-icons/md"; // replaces FaBullhorn
import { MdOutlinePalette } from "react-icons/md"; // replaces FaPalette

const ServiceOffering = () => {
  return (
    <div>
      <div className="container-fluid mt-lg-5 pt-lg-3">
        <div className="container">
          {/* Heading */}
          {/* <div className="aboveContactForm d-flex flex-column justify-content-center align-items-center mb-md-5 mb-4">
            <h1>What we offer</h1>
            <h2 className="text-center">
              Passionate creators dedicated to building impactful digital
              experiences for your business.
            </h2>
          </div> */}

          <div className="row">
            <div className="col-md-4 col-sm-4 mt-md-0 mt-3 justify-content-center d-flex">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <BsCodeSlash
                  className="reactIcons"
                  // style={{
                  //   color: "#000000",
                  //   fontSize: "3rem",
                  //   fontWeight: "bolder",
                  //   stroke: "#000000",
                  //   strokeWidth: "0.2px",
                  // }}
                />
                <p
                  className="servicePara-lightMode mt-md-3 mt-sm-2 mt-2 text-center"
                  style={{ maxWidth: "300px" }}
                >
                  We specialize in modern web development, crafting responsive
                  and high-performing websites tailored to your business needs.
                  Our team ensures a seamless modern user experience across all
                  devices.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 mt-md-0 mt-3 justify-content-center d-flex">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <MdMemory
                  className="reactIcons"
                  // style={{ color: "#000000", fontSize: "3rem" }}
                />
                <p
                  className="servicePara-lightMode mt-md-3 mt-sm-2 mt-2 text-center"
                  style={{ maxWidth: "300px" }}
                >
                  We integrate advanced AI solutions into your business
                  workflows, enabling automation, smarter decision-making, and
                  personalized user experiences. Our goal is to drive innovation
                  and growth through AI technology.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 mt-md-0 mt-3 justify-content-center d-flex">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <BsSearch
                  className="reactIcons"
                  //  style={{ color: "#000000", fontSize: "2.0rem" }}
                />
                <p
                  className="servicePara-lightMode mt-md-3 mt-sm-2 mt-2 pt-lg-0 pt-md-1 text-center"
                  style={{ maxWidth: "300px" }}
                >
                  We enhance your visibility through strategic SEO practices,
                  ensuring your website ranks higher on search engines. Our
                  approach drives organic traffic, builds brand authority,
                  enhances visibility and delivers results.
                </p>
              </div>
            </div>

            <div className="mt-md-4 mt-3 lastTwoColumnAboutPage d-flex justify-content-center align-items-center">
              <div className="col-md-4 col-sm-6 justify-content-center d-flex">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <MdCampaign
                    className="reactIcons"
                    // style={{ color: "#000000", fontSize: "2.0rem" }}
                  />
                  <p
                    className="servicePara-lightMode mt-md-3 mt-sm-2 mt-2 text-center"
                    style={{ maxWidth: "300px" }}
                  >
                    We specialize in digital marketing, delivering data-driven
                    strategies to boost your brand visibility and engagement.
                    Our team optimizes content, SEO, and social media to drive
                    measurable results across all platforms.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6  mt-sm-0 mt-3 justify-content-center d-flex">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <MdOutlinePalette
                    className="reactIcons"
                    // style={{ color: "#000000", fontSize: "2.0rem" }}
                  />
                  <p
                    className="servicePara-lightMode mt-md-3 mt-sm-2 mt-2 text-center"
                    style={{ maxWidth: "300px" }}
                  >
                    We deliver visually impactful and brand-aligned creatives
                    that capture attention. From logos to marketing materials,
                    every design is tailored to reflect your and brand's
                    identity, vision and connect with your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffering;
