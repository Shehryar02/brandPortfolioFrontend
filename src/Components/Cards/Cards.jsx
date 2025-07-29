import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cards.css";

import drPoster from "../../assets/allWorks/Posters/diabeticRetinopathyPoster.webp";
import graphicDesigningPoster from "../../assets/allWorks/Posters/graphicImage_Center.webp";
import digitalMarketingPoster from "../../assets/allWorks/Posters/digitalMarketingPoster.webp";
import videlTubePoster from "../../assets/allWorks/Posters/videlTube_Center.webp";
import mediquipPoster from "../../assets/allWorks/Posters/mediquipPoster.webp";
import handPoster from "../../assets/allWorks/Posters/handPoster_Center.webp";

// ******************************************** CROUSEL IMAGES ********************************************

import Lofty_a from "../../assets/allWorks/Final_Working_Images/1_Lofty_Mediquip/Tablet&PC/a.webp";
import Lofty_b from "../../assets/allWorks/Final_Working_Images/1_Lofty_Mediquip/Tablet&PC/b.webp";
import Lofty_c from "../../assets/allWorks/Final_Working_Images/1_Lofty_Mediquip/Tablet&PC/c.webp";
import Lofty_d from "../../assets/allWorks/Final_Working_Images/1_Lofty_Mediquip/Tablet&PC/d.webp";
import Lofty_e from "../../assets/allWorks/Final_Working_Images/1_Lofty_Mediquip/Tablet&PC/e.webp";
import Lofty_f from "../../assets/allWorks/Final_Working_Images/1_Lofty_Mediquip/Tablet&PC/f.webp";

import Videl_a from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/a.webp";
import Videl_b from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/b.webp";
import Videl_c from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/c.webp";
import Videl_d from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/d.webp";
import Videl_e from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/e.webp";
import Videl_f from "../../assets/allWorks/Final_Working_Images/2_Videl_Tube/Tablet&PC/f.webp";

import DR_a from "../../assets/allWorks/Final_Working_Images/3_Diabetic_Retinopathy/Tablet&PC/a.webp";
import DR_b from "../../assets/allWorks/Final_Working_Images/3_Diabetic_Retinopathy/Tablet&PC/b.webp";
import DR_c from "../../assets/allWorks/Final_Working_Images/3_Diabetic_Retinopathy/Tablet&PC/c.webp";
import DR_d from "../../assets/allWorks/Final_Working_Images/3_Diabetic_Retinopathy/Tablet&PC/d.webp";
import DR_e from "../../assets/allWorks/Final_Working_Images/3_Diabetic_Retinopathy/Tablet&PC/e.webp";
import DR_f from "../../assets/allWorks/Final_Working_Images/3_Diabetic_Retinopathy/Tablet&PC/f.webp";

import HandGesture_a from "../../assets/allWorks/Final_Working_Images/4_Hand_Gesture/Tablet&PC/a.webp";
import HandGesture_b from "../../assets/allWorks/Final_Working_Images/4_Hand_Gesture/Tablet&PC/b.webm";

import PWFP_a from "../../assets/allWorks/Final_Working_Images/5_PWFP_Posters/Tablet&PC/a.webp";
import PWFP_b from "../../assets/allWorks/Final_Working_Images/5_PWFP_Posters/Tablet&PC/b.webp";
import PWFP_c from "../../assets/allWorks/Final_Working_Images/5_PWFP_Posters/Tablet&PC/c.webp";

// ********************************************************************************************************

const projects = [
  {
    id: 1,
    title: "Lofty Mediquip",
    description:
      "E-commerce platform for hospitals, healthcare and medical device solutions.",
    imageCard: mediquipPoster,
    images: [Lofty_a, Lofty_b, Lofty_c, Lofty_d, Lofty_e, Lofty_f],
    caseStudy: "#",
    titleLiveScreen: "Lofty Mediquip",
    subTitleLiveScreen: "ECommerce Site For Healthcare And Medical Devices.",
    detailLiveScreen:
      "This project is a responsive eCommerce platform for medical equipment, developed using React and Django. It supports secure payments with Stripe and allows users to browse, search, and purchase products easily. Admins can manage products through a scalable backend.",
    keyFeatures: [
      "Responsive UI for all device sizes",
      "Stripe integration for secure payments",
      "Product search and category filtering",
      "Admin panel for product management",
    ],
    rating: "4.8",
  },

  {
    id: 2,
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
    id: 3,
    title: "Diabetic Retinopathy AI",
    description:
      "AI-based classifier for multi-stage Diabetic Retinopathy detection to help PCPs.",
    imageCard: drPoster,
    images: [DR_a, DR_b, DR_c, DR_d, DR_e, DR_f],
    caseStudy: "#",
    titleLiveScreen: "Diabetic Retinopathy Classifier",
    subTitleLiveScreen: "Advanced Retinopathy Diagnosiser",
    detailLiveScreen:
      "This project utilizes EfficientNetB2, a deep learning model, to accurately detect multiple stages of Diabetic Retinopathy from fundus images.",
    keyFeatures: [
      "Detects multiple DR stages",
      "Highlights fundus abnormalities",
      "High accuracy with EfficientNetB2",
      "Optimized for mobile inference",
    ],
    rating: "4.8",
  },
  {
    id: 4,
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
    id: 5,
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
  // Add similar objects for other projects as needed...
];

const Cards = () => {
  const projectRefs = useRef({});
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const openLiveScreen = (project) => {
    setSelectedProject(project);
    navigate(`#project-${project.id}`, { replace: false });
  };

  const closeLiveScreen = () => {
    setSelectedProject(null);
    navigate(location.pathname, { replace: true });
  };

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  useEffect(() => {
    const id = parseInt(location.hash.replace("#project-", ""));
    const matched = projects.find((p) => p.id === id);

    if (location.hash.startsWith("#project-") && matched) {
      const targetElement = projectRefs.current[id];
      if (targetElement) {
        const offset = 100;
        const topPos =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
      setTimeout(() => {
        setSelectedProject(matched);
      }, 600);
    } else {
      setSelectedProject(null);
    }
  }, [location.hash]);

  return (
    <>
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
                  Follow us on
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

      {/* CARD GRID */}
      <div className="container cards-container">
        <div className="row gy-5 justify-content-center">
          {projects.map((project) => (
            <div
              className="col-lg-4 col-sm-6"
              key={project.id}
              id={`project-${project.id}`}
              ref={(el) => (projectRefs.current[project.id] = el)}
            >
              <div className="project-card">
                <img
                loading="lazy"
                  src={project.imageCard}
                  alt={project.title}
                  className="project-image"
                />
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-buttons">
                    <button
                      onClick={() => openLiveScreen(project)}
                      className="btn-cards"
                    >
                      Discover the Project
                    </button>
                    {/* <button className="btn-cards">Case Study</button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* COMING SOON CARD */}
          <div className="col-lg-4 col-sm-6 project-card-comingSoon">
            <div className="project-card">
              <img
              loading="lazy"
                src={digitalMarketingPoster}
                alt="Coming Soon"
                className="project-image"
              />
              <div className="card-content">
                <h3>Digital Marketing</h3>
                <p>
                  Upcoming projects on Marketing, SEO, content strategy, and
                  brand promotion.
                </p>
                <div className="card-buttons">
                  {/* <button className="btn-comingSoon-cards" disabled>
                    Coming Soon
                  </button> */}
                  <button className="btn-cards comingSoon-view-card">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
