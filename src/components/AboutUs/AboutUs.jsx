import React from 'react'
import './AboutUs.scss'
import video1 from './image/video1.mp4';
import about1 from './image/about1.png';
import about2 from './image/about2.png';
import about3 from './image/about3.png';
import certification from './image/certification.png';
import image6 from './image/image6.png';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className='about'>
      <div className='about1'>

        <video className="video-bg" autoPlay muted loop src={video1}></video>
        <div className="overlay"> </div>
        <div className="center">
          <h1>About <span>  Aayan Infotech</span></h1>
          <h3>“Empowering Businesses Through Innovation and Growth”</h3>
          <p>Established in October 2019 with just three employees, Aayan Infotech has rapidly expanded to a team of over 150 professionals. We specialize in designing, developing, and delivering IoT, web, and mobile applications that drive businesses, enhance capabilities, and outperform the competition.
          At Aayan Infotech, we are dedicated to creating transformative technology solutions. Our focus is on streamlining processes, reducing time-to-market, and ensuring exceptional user experiences. Partner with us to harness the power of innovation and expertise, and propel your business to new heights in the dynamic digital landscape.</p>
        </div>

      </div>


      <div className="about2">
        <img src={about1} alt="" />
      </div>

      <div className="our1">
        <div className="one">
          <p>our</p>
        </div>
      </div>

      <div className="our2">
        <div className="two">
          <p>CHAIRPERSON</p>
        </div>
      </div>

      <div className="about3">
        <img src={about2} alt="" />
      </div>

      <div className="about4">
        <img src={certification} alt="" />
      </div>

      <div className="about5">
        <img src={image6} alt="" />
        <div className="button-about5">
          <Link to='/case-study'>

          <button className="button2">
            View More
          </button>
          </Link>
        </div>
      </div>
      <div className="about6">
        <Link to ='/contact-us'>
        <img src={about3} alt="" />
        </Link>
      </div>

    </div>
  )
}

export default AboutUs