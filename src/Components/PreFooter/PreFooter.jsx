import React from 'react'
import './PreFooter.css'

import { useNavigate } from 'react-router-dom';


const PreFooter = () => {

  const navigate = useNavigate();

  const navigateToContact = ()=>{
    navigate('/contact')
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navigateToAbout = ()=>{
    navigate('/About')
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navigateToWork = ()=>{
    navigate('/work')
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navigateToServices = ()=>{
    navigate('/services')
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  
  return (
    <div>
      <div className="container-fluid">
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h3 className='text-center'>Have an idea?</h3>
            <h1 className='mainTitle-lightMode text-center'>Let's rock <span className='span-lightMode'>with us</span></h1>
            <div className='d-flex mt-4 gap-lg-5 gap-4 justify-content-center preFooterUnderline-lightMode'>
                <button onClick={navigateToAbout}>About Me</button>
                <button onClick={navigateToWork}>Work</button>
                <button onClick={navigateToServices}>Services</button>
                <button onClick={navigateToContact}>Contact</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PreFooter
