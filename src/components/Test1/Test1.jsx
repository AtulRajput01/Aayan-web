import React from 'react';
import './Test1.scss';

// Import your images (replace these with your actual image imports)
import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import image6 from './img/image6.png';
import image7 from './img/image7.png';
import viewall from './img/viewall.png';
import image1Back from './img/image1Back.png';
import image2Back from './img/image2Back.png';
import image3Back from './img/image3Back.png';
import image4Back from './img/image4Back.png';
import image5Back from './img/image5Back.png';
import image6Back from './img/image6Back.png';
import image7Back from './img/image7Back.png';

const images = [
    { front: image1, back: image1Back },
    { front: image2, back: image2Back },
    { front: image3, back: image3Back },
    { front: image4, back: image4Back },
    { front: image5, back: image5Back },
    { front: image6, back: image6Back },
    { front: image7, back: image7Back },
    { front: viewall, back: viewall }
];

const RecentWorkComponent = () => {
    return (
        <div className="recent-work-container">
            <div className="text-section">
                <h2>Recent Work</h2>
                <p className="description">DESCRIPTION</p>
                <div className="lorem">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                        duis ultrices sollicitudin aliquam sen. Scelerisque duis ultrices
                        sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis.
                    </p>
                </div>
                <button className="view-all-button">View All</button>
            </div>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={index} className="image-item">
                        <div className="image-flip">
                            <img className="front" src={image.front} alt={`Recent work ${index + 1}`} />
                            <img className="back" src={image.back} alt={`Recent work ${index + 1} back`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentWorkComponent;
