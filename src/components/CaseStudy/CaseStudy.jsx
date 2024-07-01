import React from 'react'
import './CaseStudy.scss'
import video1 from './image/video1.mp4';
import case2 from './image/case2.png';
import case3 from './image/case3.png';
import case4 from './image/case4.png';
import case5 from './image/case5.png';
import icon from './image/icon.png';
import { Link } from 'react-router-dom';

function CaseStudy() {
  return (
    <div>
      {/* <div className="case-study1">
        <video className="video-bg" autoPlay muted loop src={video1}></video>
        <div className="overlay"> </div>
        <div className="center">
          <h1> Our Work</h1>
          <p>In the last 6 years of our existence, we have partnered with 700+ businesses across the world, empowering them to scale their business,<br />
           and achieve unstoppable business growth. We have deep expertise in transforming businesses across different sectors and industries,<br />
            which you can leverage to attain long-term, consistent growth.</p>
          <Link to= '/contact-us'>
          <button>Contact us</button>
          </Link>
          <Link to= '/services'>
          <button>services</button>
          </Link>

          
        </div>
      </div> */}

<div className="case-study1">
            <video className="video-bg" autoPlay muted loop src={video1}></video>
            <div className="overlay"> </div>
            <div className="center">
                <h1>Our Work</h1>
                <p>In the last 6 years of our existence, we have partnered with 700+ businesses across the world, empowering them to scale their business,<br />
                and achieve unstoppable business growth. We have deep expertise in transforming businesses across different sectors and industries,<br />
                which you can leverage to attain long-term, consistent growth.</p>
                <div className="buttons">
                    <Link to='/contact-us'>
                        <button className="btn-contact">Contact us</button>
                    </Link>
                    <Link to='/services'>
                        <button className="btn-services">Services</button>
                    </Link>
                </div>
            </div>
        </div>

      <div className="case-study2">
        Exploring industries
      </div>



      <div className="case-study3">
        In the last 6 years of our existence, we have partnered with 700+ businesses across the world,<br />
        empowering them to scale their business, and achieve unstoppable business growth. We have deep<br />
        expertise in transforming businesses across different sectors and industries, which you can leverage to<br />
        attain long-term, consistent growth.
      </div>

      <div className="case-study4">
        <img src={icon} alt="" />
      </div>

      <div className="case-study6">
        <div className="case-left">
          <img src={case2} alt="" />
        </div>

        <div className="case-right">
          <div className="case-right1">
            RehvUp <br /><span>ENTERPRISE</span>
          </div>
          <div className="case-right2">
            RehvUp is a new behaviorally based work “happiness” platform<br />
            leveraging world class Employee Experience (EX) Coaches to<br />
            inspire, fascinate, learn and delight workers for greater<br />
            happiness and purpose in the workplace.

          </div>

          <div className="case-right3">
            <Link to='/Card-Rehvup1'>

            <button className='one'>Get Started</button>
            </Link>
          </div>


        </div>
      </div>

      <div className="case-study7">
        <div className="case-study7-left">
          <div className="case-left1">
            StudentKare<br /><span>ECOMMERCE</span>
          </div>
          <div className="case-left2">
            The StudentKare website and mobile app were designed to be<br />
            user-friendly, intuitive, and efficient, reflecting their<br />
            commitment to quality educational services.
          </div>

          <div className="case-left3">

            <button className='one'>Get Started</button>

          </div>

        </div>
        <div className="case-study7-right">
          <img src={case3} alt="" />

        </div>
      </div>

      <div className="case-study8">
        <div className="case-left">
          <img src={case4} alt="" />
        </div>

        <div className="case-right">
          <div className="case-right1">
            TopGrad<br /><span>ENTERPRISE</span>
          </div>
          <div className="case-right2">
            The website was meticulously crafted to provide job seekers<br />
            with an intuitive and user-friendly interface, allowing them to<br />
            effortlessly search and apply for jobs.

          </div>

          <div className="case-right3">

            <button className='one'>Get Started</button>

          </div>


        </div>
      </div>

      <div className="case-study9">
        <div className="case-study9-left">
          <div className="case-left1">
            Roundup<br /><span>FOOD & RESTAURANT</span>
          </div>
          <div className="case-left2">
            Explore The Roundup, your ultimate guide to Canadian beef!<br />
            Crafted by Canada Beef experts, this comprehensive app<br />
            offers beef cut info, recipes, cooking tips, and videos. Buy the<br />
            perfect cut, cook with confidence, and savor premium <br />
            Canadian beef, proudly raised by our farmers and ranchers.<br />
            Look for the Canadian Beef symbol when shopping!
          </div>

          <div className="case-left3">
          <Link to='/Card-Rehvup2'>

            <button className='one'>Get Started</button>
            </Link>

          </div>

        </div>
        <div className="case-study9-right">
          <img src={case5} alt="" />

        </div>
      </div>
    </div>


  )
}

export default CaseStudy