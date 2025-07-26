import React from 'react'
import './HeroBanner.css'
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
    const navigate = useNavigate();
  
    const workingLetsTalkBtn = () => {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <div>

        <div className="container-fluid">
            <div className="container">
              <h5 className='greetings-lightMode'>
              Senvotex empowers your brand with digital solutions and strong digital growth.
              </h5>  
              <h1 className='mainTitle-lightMode'>We offer comprehensive digital solutions for your <span className='span-lightMode'>brand’s success</span></h1>
              <div className='d-flex div-smaller-screens justify-content-between align-items-center mt-4'>
                <button onClick={workingLetsTalkBtn} className='letsTalkbtn-lightMode d-flex justify-content-center  align-items-center gap-2 px-sm-4 py-sm-3 px-3 py-2'>Let's Talk <i className="iconFAwesomOppose-lightMode fa-solid fa-arrow-right"></i></button>
              <p className='heroBannerPara-lightMode'>
                Integrating design, technology, and strategy to enhance your brand through <br /> <span className='heroBannerParaSpan'>AI</span>, <span className='heroBannerParaSpan'>web development</span>, <span className='heroBannerParaSpan'>SEO</span>, <span className='heroBannerParaSpan'>digital marketing</span>, and <span className='heroBannerParaSpan'>creative design</span> solutions.
              </p>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default HeroBanner
