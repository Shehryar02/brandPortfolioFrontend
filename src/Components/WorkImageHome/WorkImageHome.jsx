import React, { useEffect, useState } from "react";
import "./WorkImageHome.css"


import graphicDesigningPoster from "../../assets/allWorks/Posters/graphicImage_Center.webp"
import videlTubePoster from "../../assets/allWorks/Posters/videlTube_Center.webp"
import handPoster from "../../assets/allWorks/Posters/handPoster_Center.webp";

// ******************************************** CROUSEL IMAGES ********************************************

import Videl_a from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/a.webp";
import Videl_b from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/b.webp";
import Videl_c from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/c.webp";
import Videl_d from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/d.webp";
import Videl_e from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/e.webp";
import Videl_f from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/f.webp";

import HandGesture_a from "../../assets/allWorks/Final_Working_Images/4_Hand_Gesture/Tablet&PC/a.webp";
import HandGesture_b from "../../assets/allWorks/Final_Working_Images/4_Hand_Gesture/Tablet&PC/b.webm";

import PWFP_a from "../../assets/allWorks/Final_Working_Images/5_PWFP_Posters/Tablet&PC/a.webp";
import PWFP_b from "../../assets/allWorks/Final_Working_Images/5_PWFP_Posters/Tablet&PC/b.webp";
import PWFP_c from "../../assets/allWorks/Final_Working_Images/5_PWFP_Posters/Tablet&PC/c.webp";

// ********************************************************************************************************

const projects = [
  {
    id: 1,
    title: "VidelTube",
    description:
      "A user-friendly platform for video discovery, viewing, and category-based exploration.",
    imageCard: videlTubePoster,
    images: [Videl_a, Videl_b, Videl_c, Videl_d, Videl_e, Videl_f],
    caseStudy: "#",
    titleLiveScreen: "Videl Tube",
    subTitleLiveScreen: "Video Platform",
    detailLiveScreen:
      "This project is a user-friendly video search platform that lets users find and watch videos easily. It provides smooth browsing and fast video playback without requiring any login.",
    keyFeatures: [
      "Simple and intuitive video search",
      "Fast video loading and playback",
      "No login or sign-up required",
      "Clean and minimal interface",
    ],
    rating: "4.8",
  },
  {
    id: 2,
    title: "GestureSense",
    description:
      "AI-based hand gesture recognizer capable of identifying 4 distinct gestures.",
    imageCard: handPoster,
    images: [HandGesture_a, { type: "video", src: HandGesture_b }],
    caseStudy: "#",
    titleLiveScreen: "GestureSense",
    subTitleLiveScreen: "Advanced Gesture Detector",
    detailLiveScreen:
      "This project uses YOLO to recognize and classify four different hand gestures in real-time.",
    keyFeatures: [
      "Recognizes 4 distinct hand gestures",
      "Real-time gesture detection",
      "Built with YOLO architecture",
      "Optimized for fast inference",
    ],
    rating: "4.8",
  },
  {
    id: 3,
    title: "Wrestling Poster Design",
    description:
      "High-impact sports poster created for PWFP Heavyweight Champion Raja Naveed.",
    imageCard: graphicDesigningPoster,
    images: [PWFP_a, PWFP_b, PWFP_c],
    caseStudy: "#",
    titleLiveScreen: "PWFP Champion Poster",
    subTitleLiveScreen: "Graphic Design – Poster",
    detailLiveScreen:
      "This high-impact promotional poster was designed for PWFP to commemorate Raja Naveed’s 365+ day reign.",
    keyFeatures: [
      "Cinematic poster composition",
      "Professional title belt rendering",
      "Creative use of image masking and effects",
      "Powerful storytelling through visuals",
    ],
    rating: "5.0",
  },
];

const WorkImageHome = ({
  workImage,
  workImage2,
  workImage3,
  appName,
  serviceName,
  cardID,
}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openLiveScreen = () => {
    setSelectedProject(projects[cardID]);
    window.history.pushState({ modalOpen: true }, ""); // Push fake state for back button
  };

  const closeLiveScreen = () => {
    setSelectedProject(null);
    if (window.history.state?.modalOpen) {
      window.history.back(); // Clean history
    }
  };

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProject(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
        {/* LIGHT DISPLAY FOR DETAILS OF WORK */}
      {selectedProject && (
        <div className="viewLiveScreen">
          <button onClick={closeLiveScreen} className="exit-button">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 d-md-flex align-items-center">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide viewLiveScreen-videoContainer"
                >
                  {/* Carousel Indicators */}
                  <div className="carousel-indicators">
                    {selectedProject.images?.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Carousel Images */}
                  <div className="carousel-inner">
                    {selectedProject.images?.map((media, index) => {
                      const isVideo =
                        typeof media === "object" && media.type === "video";
                      const src = isVideo ? media.src : media;

                      return (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          {isVideo ? (
                            <video
                              className="d-block w-100 img-fluid"
                              controls
                              autoPlay
                              muted
                              loop
                              playsInline
                            >
                              <source src={src} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                            loading="lazy"
                              src={src}
                              className="d-block w-100 img-fluid"
                              alt={`Slide ${index + 1}`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
                <h2 className="mb-0 viewLiveScreen-mainHeading">
                  {selectedProject.titleLiveScreen}
                </h2>
                <h6 className="mb-3">{selectedProject.subTitleLiveScreen}</h6>
                <p className="viewLiveScreen-mainContent">
                  {selectedProject.detailLiveScreen}
                </p>
                <div className="row my-3">
                  <h5 className="viewLiveScreen-shortHeading">Key Features</h5>
                  <div className="col-md-10">
                    <ul>
                      {selectedProject.keyFeatures?.map((feature, index) => (
                        <li key={index} className={index !== 0 ? "pt-2" : ""}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h5 className="viewLiveScreen-shortHeading">
                  Rating & Recognition
                </h5>
                <div className="viewLiveScreen-ratingSection">
                  <span className="viewLiveScreen-ratingSectionStar">★</span>
                  <span className="viewLiveScreen-ratingSectionRating">
                    {selectedProject.rating} / 5
                  </span>
                </div>
                <h5 className="mt-3 viewLiveScreen-shortHeading">
                  See this project on
                </h5>
                <div className="d-flex gap-2 mb-md-0 mb-2">

                  <a className="viewLive-socialBtn d-flex justify-content-center align-items-center"
                  href="https://facebook.com/senvotex.digital"
                  target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f viewLive-socialIcon"></i>
                  </a>

                  <a className="viewLive-socialBtn d-flex justify-content-center align-items-center"
                  href="https://instagram.com/senvotex.digital"
                  target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram viewLive-socialIcon"></i>
                  </a>
                  
                  <a className="viewLive-socialBtn d-flex justify-content-center align-items-center"
                  href="https://linkedin.com/company/senvotexdigital"
                  target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in viewLive-socialIcon"></i>
                  </a>

                  <a className="viewLive-socialBtn d-flex justify-content-center align-items-center"
                  href="https://wa.me/923251796359"
                  target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp viewLive-socialIcon"></i>
                  </a>
{/* 
                  <button className="viewLive-socialBtn">
                    <i className="fa-brands fa-linkedin-in viewLive-socialIcon"></i>
                  </button>

                  <button className="viewLive-socialBtn">
                    <i className="fa-brands fa-instagram viewLive-socialIcon"></i>
                  </button> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CARDS SHOWCASING */}
      <div className="mt-md-5 mt-4 mb-3">
        <div className="container-fluid">
          <div className="container ">
            <div className="work-scroll-wrapper d-lg-flex justify-content-center">
              <div className="scroll-images justify-content-center d-flex gap-2">
                <img
                loading="lazy" src={workImage2} className="workImage" alt="" />
                <img
                loading="lazy" src={workImage} className="workImage" alt="" />
                <img
                loading="lazy" src={workImage3} className="workImage" alt="" />
              </div>
            </div>
            <div className="mt-sm-4 mt-2 d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center innerSections-lightMode">
                <h3 className="m-0">{appName}</h3>
                <p className="m-0 para-lightMode">{serviceName}</p>
              </div>
              <button
                onClick={openLiveScreen}
                className="btns-lightMode d-flex align-items-center justify-content-center gap-2 px-md-5 py-md-2 px-sm-4 py-sm-2 px-3 py-2"
              >
                <i className="iconFAwesom-lightMode fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkImageHome;
