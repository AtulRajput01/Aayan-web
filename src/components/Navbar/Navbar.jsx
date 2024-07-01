// import React from 'react';
// import "./Navbar.scss";
// import Vector from "./image/Vector.png"
// import { Link } from 'react-router-dom';

// const App = () => {
//     return (
//         <div>
//             <div className="navigation">
//                 <div className="logo">
                    
//                 </div>
//                 <div className="nav-menu">
                    
//                         <Link to= './about'>About Us</Link>
//                         <Link to= './about'>Company</Link>
//                         <Link to= './case-study'>Case Study</Link>
//                         <Link to= './services'>Services</Link>
                    
//                     <div className="btn-home">
//                         <button>Contact Us</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default App


import React from 'react';
import "./Navbar.scss";
import Vector from "./image/Vector.png";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src={Vector} alt="Logo" height="35" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/company">Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/case-study">Case Study</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                    <Link className="nav-link" to="/contact-us">
                        <button className="btn btn-dark ms-3">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default App;
