import React from "react";
import "./Services.scss";
// import image2 from "./image/image2.png";
import image1 from "./image/image1.png"
import image2 from "./image/image2.png"
import image3 from "./image/image3.png"
import image4 from "./image/image4.png"
import image5 from "./image/image5.png"
import image6 from "./image/image6.png"
import service1 from "./image/service1.png"
import service2 from "./image/service2.png"
import service3 from "./image/service3.png"
import service4 from "./image/service4.png"
import service5 from "./image/service5.png"
import service6 from "./image/service6.png"
import service7 from "./image/service7.png"
import service8 from "./image/service8.png"
import video1 from "./image/video1.mp4"
import { Link } from "react-router-dom";


function Services() {
  return (
    <div className="services">

      <div className='service1'>
        <video className="video-bg" autoPlay muted loop src={video1}></video>
        <div className="overlay"> </div>
        <div className="center">
          <h1> Services</h1>
          <h3>We are Offering</h3>
          <Link to= '/contact-us'>
          <button>Contact now</button>
          </Link>

          
        </div>

      </div>

      <div className="service2">
        <div class="grid-item">
          <Link to='/web-service ' style={{ textDecoration: 'none' }}>
            <img src={service1} alt="" />
            <div className="web-development">
              Web Development<br />
              <span>
                We explore, identify and implement all<br />
                possible ways to create and develop<br />
                conversion-optimized websites.
              </span>
            </div>
          </Link>
        </div>
        <div class="grid-item">
        <Link to='/design-service ' style={{ textDecoration: 'none' }}>
          <img src={service2} alt="" />
          <div className="web-development">
            Design<br />
            <span>
              Aayan Infotech aims to provide user-friendly<br />
              and responsive website design for enhancing<br />
              our clients’ online presence.

            </span>
          </div>
          </Link>
        </div>
        <div class="grid-item">
        <Link to='/software-service ' style={{ textDecoration: 'none' }}>
          <img src={service3} alt="" />
          <div className="web-development">
            Software Development<br />
            <span>
              Our rich skillset and hands-on experience<br />
              are capable of developing software and satisfy<br />
              customer requirements.


            </span>
          </div>
          </Link>
        </div>
        <div class="grid-item">
        <Link to='/appDev-service ' style={{ textDecoration: 'none' }}>
          <img src={service4} alt="" />
          <div className="web-development">
            Application Development<br />
            <span>
              With brilliant minds and creative<br />
              designers, Aayan India builds smarter<br />
              solutions for all smartphone users.

            </span>
          </div>
          </Link>
        </div>
        <div class="grid-item">
        <Link to='/game-service ' style={{ textDecoration: 'none' }}>
          <img src={service5} alt="" />
          <div className="web-development">
            Game Development<br />
            <span>
              For your concept of desired gaming
              app, we are<br /> here at Aayan India to
              give an edge to it.<br /> We have team of
              game app developers,

            </span>
          </div>
          </Link>

        </div>
        <div class="grid-item">
          <Link to='/digital-service ' style={{ textDecoration: 'none' }}>
            <img src={service6} alt="" />
            <div className="web-development">
              Digital Marketing<br />
              <span>
                Aayan Infotech is a progressive, ROI-<br />
                focused Digital Marketing Company where <br />
                we tailor our result-driven approaches.
              </span>
            </div>
          </Link>
        </div>
        <div class="grid-item">
        <Link to='/iot-service ' style={{ textDecoration: 'none' }}>
          <img src={service7} alt="" />
          <div className="web-development">
            IOT Apps<br />
            <span>
              For your concept of desired gaming
              app,<br /> we are here at Aayan India to give
              an edge to <br />it. We have team of game app
              developers,
            </span>
          </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/blockchain-service ' style={{ textDecoration: 'none' }}>
            <img src={service8} alt="" />
            <div className="web-development">
              Blockchain Development<br />
              <span>
                Aayan Infotech is a progressive, ROI<br />
                -focused Blockchain Company where we<br />
                tailor our result-driven approaches.
              </span>
            </div>
          </Link>
        </div>


      </div>

      <div className="service6">
        <div className="left">
          <img src={image5} alt="" />
        </div>

        <div className="right">
          <h2 className="one">Our Services</h2><br />
          <p className="two">Welcome to Aayan Infotech,
            your trusted IT<br /> partner.
            We specialize in website design,<br />
            development, and application creation to<br />
            enhance your online presence. Our expertise<br />
            extends to software and game development,<br />
            providing innovative solutions across different<br />
            platforms. With our tailored digital marketing<br />
            strategies, we drive traffic and conversions
            for<br /> businesses of all sizes and domains.</p>

          <div className="three">
            360-degree solution
          </div>

          <div className="four">
            Website, Wellness, Social Media, Logistics,<br />
            Insurance, Healthcare, Finance, Entertainment,<br />
            Sports, Foot & Restaurant, All set
          </div>
          <Link to='/contact-us ' style={{ textDecoration: 'none' }}>

          <button className="button1">Contact us</button>
          </Link>

        </div>

      </div>

      <div className="service7">
        <img src={image6} alt="" />

        <div className="button-service7">
          <Link to='/case-study'>
            <button className="button2">
              View More
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Services;
