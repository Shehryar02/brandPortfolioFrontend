import React from "react";
import "./WhyChooseUs.css";

import {
  FaSearch,
  // FaBullseye,
  FaChess,
  // FaDraftingCompass,
  FaPaintBrush,
  // FaCog,
  FaRocket,
  // FaChartLine,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="container-fluid mt-5 workProcessContainer-lightMode py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center workProcessMainHeading-lightMode">
                Our Work Process
              </h1>
              <p className="text-center workProcessPara-lightMode">
                Our process begins by understanding your goals and vision. We
                craft a tailored strategy, then bring ideas to life through
                innovative development and precise execution. With open collaboration
                at every step, we deliver refined, high-performing results that
                align with your objectives.
              </p>
              <p className="text-center workProcessPara-lightMode">
                We deliver services designed for optimal performance, ensuring
                efficient and scalable solutions that meet your evolving
                business needs.
              </p>
            </div>

            <div className="col-md-6 mt-md-0 mt-4">
              <div className="row gy-md-3 justify-content-center">
                <div className="col-md-6 cardContainingColumn">
                  <div className="cardsWorkProcess-lightMode p-md-3 p-2">
                    <div className="upperCard-lightMode">
                      <div className="imageUpperCard-lightMode d-flex justify-content-center align-items-center">
                        <p className="m-0">
                          <FaSearch
                            style={{ color: "#000000", fontSize: "1.4rem" }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="lowerCard-lightMode mt-2">
                      <h3>Discover & Goal Setting</h3>
                      <p>
                        Carefully study and learn your vision to ensure every step
                        aligns perfectly with your goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 cardContainingColumn pt-5">
                  <div className="cardsWorkProcess-lightMode p-md-3 p-2">
                    <div className="imageUpperCard-lightMode d-flex justify-content-center align-items-center">
                      <p className="m-0">
                        <FaChess
                          style={{ color: "#000000", fontSize: "1.4rem" }}
                        />
                      </p>
                    </div>
                    <div className="lowerCard-lightMode mt-2">
                      <h3>Strategy Development</h3>
                      <p>
                        Create focused strategies tailored to overcome
                        challenges and seize new opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 cardContainingColumn">
                  <div className="cardsWorkProcess-lightMode p-md-3 p-2">
                    <div className="imageUpperCard-lightMode d-flex justify-content-center align-items-center">
                      <p className="m-0">
                        <FaPaintBrush
                          style={{ color: "#000000", fontSize: "1.4rem" }}
                        />
                      </p>
                    </div>
                    <div className="lowerCard-lightMode mt-2">
                      <h3>Creative Execution</h3>
                      <p>
                        Transform ideas into engaging designs with precision
                        and attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 cardContainingColumn pt-5">
                  <div className="cardsWorkProcess-lightMode p-md-3 p-2">
                    <div className="imageUpperCard-lightMode d-flex justify-content-center align-items-center">
                      <p className="m-0">
                        <FaRocket
                          style={{ color: "#000000", fontSize: "1.4rem" }}
                        />
                      </p>
                    </div>
                    <div className="lowerCard-lightMode mt-2">
                      <h3>Performance & Growth</h3>
                      <p>
                        Deliver scalable solutions designed for optimal
                        performance and lasting growth.
                      </p>
                    </div>
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

export default WhyChooseUs;
