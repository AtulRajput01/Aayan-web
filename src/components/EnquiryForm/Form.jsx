import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Form, Button } from 'react-bootstrap';

import './Form.scss'; // Optional: For custom styles
import { Link } from 'react-router-dom';

const EnquiryForm = () => {
  return (

    <div className="card1">

    
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center text-light">
        <h1>Fuel Your Brand’s<br/> Goals with <span className="text-success">Aayan</span></h1>
        <p>You will get a response within 24 hours. We will explain in details how we can help<br/>
          you grow your brand within the stated budget.</p>
      </div>
      <Form className="w-100" style={{ maxWidth: '400px' }}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label className="text-light">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label className="text-light">Phone number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group controlId="formBudget" className="mb-3">
          <Form.Label className="text-light">Budget</Form.Label>
          <Form.Control type="text" placeholder="Enter your budget" />
        </Form.Group>
        <Form.Group controlId="formGoals" className="mb-3">
          <Form.Label className="text-light">Goals</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your goals" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Send Enquiry
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default EnquiryForm;
