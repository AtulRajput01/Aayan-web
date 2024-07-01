import React from 'react';
import './Test3.scss';
import logo from './img/logo.png'; // Import your logo image
import webDevIcon from './img/webDevIcon.png';
import appDevIcon from './img/appDevIcon.png';
import gameDevIcon from './img/gameDevIcon.png';
import softwareDevIcon from './img/softwareDevIcon.png';
import digitalMarketingIcon from './img/digitalMarketingIcon.png';
import iotIcon from './img/iotIcon.png';

const services = [
    { title: 'Website Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: webDevIcon },
    { title: 'App Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: appDevIcon },
    { title: 'Game Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: gameDevIcon },
    { title: 'Software Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: softwareDevIcon },
    { title: 'Digital Marketing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: digitalMarketingIcon },
    { title: 'IOT', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: iotIcon },
];

const OurServiceComponent = () => {
    return (
        <div className="our-service-container">
            <h1>OUR SERVICE</h1>
            <div className="services">
                <div className="central-logo">
                    <img src={logo} alt="Central Logo" />
                </div>
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <img src={service.icon} alt={`${service.title} Icon`} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServiceComponent;
