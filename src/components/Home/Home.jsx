import React from "react";
import logo from "./img/logo.png";
import video1 from "./img/video1.mp4";
import video2 from "./img/video2.mp4";
import video3 from "./img/video3.mp4";
import chart from "./img/chart.png";
import chartt2 from "./img/chartt2.png";
import chart3 from "./img/chart3.png";
import chart4 from "./img/chart4.png";
import chart5 from "./img/chart5.png";
import Group from "./img/Group.png";
import Group1 from "./img/Group1.png";
import certification from "./img/certification.png";
import "./Home.scss";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import Test from "../Test/Test"
import Test1 from "../Test1/Test1"
import Test2 from "../Test2/Test2"


function Home() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  

  return (
    <div className="home">
      <div className="home1">
        <video className="video-bg" autoPlay muted loop src={video1}></video>
        <div className="overlay"> </div>

        <div className="left">
          <h2 className="one">
            Delivering Comprehensive
            <br /> Solutions for the
          </h2>
          <h2 className="two">Age of Technology</h2>
          {/* <TypeAnimation
              sequence={[
                "Digital Age",
                1000,
                "Age of Technology",
                1000,
                "Digital Era",
                1000,
              ]}
              wrapper="span"
              speed={20}
              className="text-[#389259] font-bold text-5xl"
              repeat={Infinity}
              preRenderFirstString={false}
              cursor={false}
            /> */}

              <Link to='/contact-us'>
          <button>Get Started</button>
          </Link>
        </div>
        <div className="right">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="home2">
        <div className="left">
          <div className="bubbles-container">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <h2 style={{ color: "rgba(72, 72, 72, 1) font-weight:bold" }}>
            WHAT WE DO
          </h2>
          <p>
            We provide many services which are most important for your business,
            like webpage designs, website development, application development,
            software development, gaming app development, and much more. Thus,
            we also provide 24x7 help service to all of our customers whenever
            they need it. All these services will help you to be the greatest
            among all the competitors in the market
          </p>
        </div>
        <div className="right">
          <video className="video-bg" autoPlay muted loop src={video2}></video>
        </div>
      </div>
      <div className="home3">
        <img src={chart} alt="" />
      </div>
      <div className="home4">
       <Test1 />
      </div>
      <div className="home5">
       <Test2 />
      </div>

      <div className="home6">
        <img src={chart3} alt="" />
      </div>

      <div className="aayaninfo">
        <h2 className="a1">Why Aayan Infotech ?</h2>
      </div>

      <div className="home7">
        <img src={chartt2} alt="" />
      </div>

      <div className="home8">
      <span>
      Our Certifications
        </span>
        <Test />
      </div>

      <div className="home9">
      <div className="responsive-home">
      <div className="video-section">
                <iframe
                    width="500"
                    height="250"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video ID
                    title="YouTube video player"
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-section">
                <h2>Your Reliable Digital Partner</h2>
                <div className="text-section1">

                <p>
                    With a stellar track record and client-centric approach, Aayan Infotech is the trusted choice for all your digital needs. Our team of experts is committed to delivering exceptional services, driving your business growth. Choose us with confidence and experience the reliability and expertise that sets us apart.
                </p>
                </div>
            </div>
        </div>
      </div>

      {/* <div className="home9">
        <div className="left">
          <h2>Your Reliable Digital Partner</h2>
          <p>
            With a stellar track record and client-centric approach, Aayan
            Infotech is the trusted choice for all your digital needs. Our team
            of experts is committed to delivering exceptional services, driving
            your business growth. Choose us with confidence and experience the
            reliability and expertise that sets us apart.
          </p>
        </div>
        <div className="right">
          <video className="video-bg" autoPlay muted loop src={video3}></video>
        </div>
      </div> */}

     

      <div className="home10">
        <div className="first">
          <img src={Group} alt="" />
        </div>

        <div className="second">
          <h2>Ready to get started?</h2>
          <span>Talk to us today</span>
          <div className="second-button">
            <button>View Services</button>
            <button>Contact Us</button>
          </div>
          <ReactStars
        count={5}
        onChange={ratingChanged}
        size={50}  // This value can remain or be adjusted
        activeColor="yellow"
        classNames="custom-stars" // Apply the custom CSS class
      />
          
          
        </div>

        <div className="third">
          <img src={Group1} alt="" />
        </div>
      </div>

      <div className="home11">
        <span>
          As the world prioritizes a technology-driven environment for the
          benefit of all,
          <br />
          Aayan India stands committed to supporting agencies dedicated to
          national development.
        </span>
      </div>
    </div>
  );
}

export default Home;
