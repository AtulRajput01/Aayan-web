import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import CaseStudy from './components/CaseStudy/CaseStudy';
import Company from './components/Company/Company';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx';
import Services from './components/Services/Services';
import WebDevService from './components/WebDevService/WebDevService.jsx';
import DigitalMarketing from './components/DigitalMarketing/DigitalMarketing';
import CardRehvup1 from './components/CardRehvup1/CardRehvup1';
import CardRehvup2 from './components/CardRehvup2/CardRehvup2';
import Blockchain from './components/Blockchain/Blockchain';
import Iot from './components/Iot/Iot';
import Test from './components/Test/Test.jsx';
import Test1 from './components/Test1/Test1.jsx';
import Test2 from './components/Test2/Test2.jsx';
import Test3 from './components/Test3/Test3.jsx';
import GameDev from './components/GameDev/Game';
import SoftwareDev from './components/SoftwareDev/SoftwareDev';
import AppDev from './components/AppDev/App';
import Design from './components/Design/Design';
import ScrollToTop from "./ScrollToTop";

import PageNotFound from './components/PageNotFound/PageNotFound';
import EnquiryForm from './components/EnquiryForm/Form.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-service" element={<WebDevService />} />
        <Route path="/digital-service" element={<DigitalMarketing />} />
        <Route path="/blockchain-service" element={<Blockchain />} />
        <Route path="/iot-service" element={<Iot />} />
        <Route path="/game-service" element={<GameDev />} />
        <Route path="/software-service" element={<SoftwareDev />} />
        <Route path="/appDev-service" element={<AppDev />} />
        <Route path="/design-service" element={<Design />} />
        <Route path="/Card-Rehvup1" element={<CardRehvup1 />} />
        <Route path="/Card-Rehvup2" element={<CardRehvup2 />} />
        <Route path="/form" element={<EnquiryForm />} />
        <Route path="/test" element={<Test  />} />
        <Route path="/test1" element={<Test1  />} />
        <Route path="/test2" element={<Test2  />} />
        <Route path="/test3" element={<Test3  />} />
        

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />




    </Router>
  );
}

export default App;