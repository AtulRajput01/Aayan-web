import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';
import Vector from './image/Vector.png'; // Ensure you have a logo image in your src folder
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="last">

   
    <footer className="footer bg-light text-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <img src={Vector} alt="Logo" className="footer-logo mb-3" />
            <address>
              C-84, Vibhuti Khand, 2nd Floor, INCUGUS Tower, Gomti Nagar,<br />
              Lucknow, Uttar Pradesh 226010
            </address>
            <p><i className="bi bi-envelope"></i> business@aayanindia.in</p>
            <p><i className="bi bi-envelope"></i> info@aayanindia.in</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Our Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="#">Link6</a></li>
            </ul>
            <Link to='/contact-us'>
            <a href="#" className="btn btn-dark mt-3">Donate Us</a>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/appDev-service">Application Development</a></li>
              <li><a href="/web-service">Website Development</a></li>
              <li><a href="/software-service">Software Development</a></li>
              <li><a href="/game-service">Game Development</a></li>
              <li><a href="/design-service">Designing</a></li>
              <li><a href="/iot-service">IOT</a></li>
              <li><a href="/blockchain-service">Blockchain</a></li>
              <li><a href="/digital-service">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            
            <h5>Contact</h5>
            
            <p><i className="bi bi-telephone"></i> +44 7827 814437</p>
            <p><i className="bi bi-telephone"></i> +91 522 319 5400</p>
            <p><a href="#">More</a></p>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <p><a href="#">Privacy & Policy</a></p>
            <p><a href="#">Terms & Condition</a></p>
          </div>
          <div className="col-md-6 text-md-right">
            <p>Copyright by @Aayan Infotech Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
