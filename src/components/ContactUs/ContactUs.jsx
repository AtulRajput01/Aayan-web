import React from 'react'
import './ContactUs.scss'
import contact1 from './image/contact1.png';
import contact2 from './image/contact2.png';
import contact4 from './image/contact4.png';
import call from './image/call.png';
import contact3 from './image/contact3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function ContactUs() {
  return (
    <div className='contact'>
      {/* <div className='contact1'>

        <div className='contact-left'>
          <h2 className='first'>Get in touch with us</h2>
          <p>We appreciate your interest in connecting<br/> with us. Whether you have a question,
            a<br/> suggestion, or a project you’d like to discuss,<br/> we are here to assist you.
            Please use the <br/>contact information provided below or fill out <br/>the form,
            and we will respond promptly.</p>

        </div>

        <div className="contact-right">
          <img src={contact1} alt="" />
        
          
        </div>

      </div> */}

<div className="case-study7">
        <div className="case-study7-left">
          <div className="case-left1">
          Get in touch with Us<br />
          </div>
          <div className="case-left2">
          We appreciate your interest in connecting<br/>
           with us. Whether you have a question, a <br/>
           suggestion, or a project you’d like to <br/>
           discuss, we are here to assist you. Please<br/>
            use the contact information provided below <br/>
            or fill out the form, and we will respond <br/>promptly.

          </div>

          

        </div>
        <div className="case-study7-right">
          <img src={contact1} alt="" />

        </div>
      </div>

      <div className="contact2">
        <img src={contact4} alt="" />
      </div>
      <div className="contact3">
        <img src={contact2} alt="" />
      </div>

      <div className="contact4">
      <Row>
        <Col md={6} className="d-flex flex-column align-items-start justify-content-center">
          <h3>Reach Us Directly</h3>
          <Form className="w-100">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" placeholder="Type Your Message Here..." />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-right d-flex flex-column align-items-center justify-content-center">
          <img src={call} alt="Call Us" />
          <div className="contact-right1 text-center">
            <p>+44 7827 814437</p>
            <p>+91 522 319 5400</p>
            <span>
              info@aayanindia.in<br />
              business@aayanindia.in<br />
              info.aayanindia@gmail.com
            </span>
          </div>
        </Col>
      </Row>
    </div>

    </div>
  )
}

export default ContactUs