import React from 'react'
import  './ReviewHome.css'

import personImg from '../../assets/aboutMe/person.png'

const ReviewHome = () => {
  return (
    <div>
        <div className="container-fluid mt-4 mt-sm-4 mt-md-5">
            <div className="container d-flex justify-content-center align-items-center">
                <h4 className='text-center reviewPara'>
                    "Senvotex demonstrated exceptional professionalism and precision throughout the project. Their attention to detail and reliable execution made them a trusted and valued partner."
                </h4>
            </div>

            <div className="personContainer mt-3 container d-flex justify-content-center align-items-center">
              <div className='personData-lightMode d-flex flex-column justify-content-center align-items-center'>
                <img className='mb-2' src={personImg} alt="" />
                <h3>Raja Shaharyar Ahmed</h3>
                <h3><span className='span-lightMode'>CEO of</span> Teamwork</h3>
              </div>

              {/* <div className='personData-lightMode d-flex flex-column justify-content-center align-items-center'>
                <img className='mb-2' src={personImg} alt="" />
                <h3>Richard Jones</h3>
                <h3><span className='span-lightMode'>CEO of</span> Teamwork</h3>
              </div>

              <div className='personData-lightMode d-flex flex-column justify-content-center align-items-center'>
                <img className='mb-2' src={personImg} alt="" />
                <h3>Richard Jones</h3>
                <h3><span className='span-lightMode'>CEO of</span> Teamwork</h3>
              </div> */}
            </div>
        </div>    

        <div className='mt-5'>
          <hr />
        </div>  
    </div>
    
  )
}

export default ReviewHome
