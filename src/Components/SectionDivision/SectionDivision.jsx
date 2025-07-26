import React from 'react'
import './SectionDivision.css'
import { useNavigate } from 'react-router-dom';

const SectionDivision = ({heading, buttonHeading}) => {
        const navigate = useNavigate();

  const workingViewAllWorkBtn = () => {
    navigate("/work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>

        <div className="container-fluid">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className='sections-lightMode m-0'>{heading}</h2>
                    <button onClick={workingViewAllWorkBtn} className='btns-lightMode section-mobile d-flex justify-content-between align-items-center gap-2 px-md-3 py-md-2 px-3 py-1'>{buttonHeading}<i className="iconFAwesom-lightMode fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SectionDivision
