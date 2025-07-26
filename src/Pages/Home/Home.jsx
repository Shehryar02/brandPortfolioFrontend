import React, { useState } from 'react'

import HeroBanner from '../../Components/HeroBanner/HeroBanner'
import SectionDivision from '../../Components/SectionDivision/SectionDivision'
import WorkImageHome from '../../Components/WorkImageHome/WorkImageHome'
import AboutHome from '../../Components/AboutHome/AboutHome'
import PreFooter from '../../Components/PreFooter/PreFooter'


// ********************************** POSTERS **********************************

import handPoster_Center from "../../assets/allWorks/Posters/handPoster_Center.jpg";
import handPoster_Left from "../../assets/allWorks/Posters/handPoster_Left.jpg";
import handPoster_Right from "../../assets/allWorks/Posters/handPoster_Right.jpg";

import graphicDesigningPoster_Center from "../../assets/allWorks/Posters/graphicImage_Center.png";
import graphicDesigningPoster_Left from "../../assets/allWorks/Posters/graphicImage_Left.png";
import graphicDesigningPoster_Right from "../../assets/allWorks/Posters/graphicImage_Right.png";

import videlTubePoster_Center from "../../assets/allWorks/Posters/videlTube_Center.jpg";
import videlTubePoster_Left from "../../assets/allWorks/Posters/videlTube_Left.jpg";
import videlTubePoster_Right from "../../assets/allWorks/Posters/videlTube_Right.jpg";

// ******************************************************************************

import { Helmet } from 'react-helmet-async';



const Home = () => {

  

  return (
    <div>

            <Helmet>
        <title>Senvotex | Welcome</title>
      </Helmet>

      <div className="mt-md-5 mt-4">
        <HeroBanner />
      </div>

      <div className="mt-5 pt-lg-5 pt-md-3">
        <SectionDivision heading='Selected Work' buttonHeading='View All Work'/>
      </div>

      <div>
        <WorkImageHome workImage={videlTubePoster_Center} workImage2={videlTubePoster_Right} workImage3={videlTubePoster_Left} appName='Videl Tube' serviceName='Web Application' cardID='0'/>
        <WorkImageHome workImage={handPoster_Center} workImage2={handPoster_Left} workImage3={handPoster_Right} appName='Gesture Sense' serviceName='AI Application' cardID='1'/>
        <WorkImageHome workImage={graphicDesigningPoster_Center} workImage2={graphicDesigningPoster_Left} workImage3={graphicDesigningPoster_Right} appName='PWFP Champion' serviceName='Poster & Brochure Design' cardID='2'/>
      </div>

      <div>
        <AboutHome />
      </div>

      <div className='my-5 pt-3'>
        <PreFooter />
      </div>

        
    </div>
  )
}

export default Home
