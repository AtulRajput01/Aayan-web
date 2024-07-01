import React from 'react'
import "./WebDevService.scss";
import webdev1 from "./image/webdev1.png"
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import video from "./image/video.mp4"
import Switch from "./image/Switch.mp4"


const WebDevService = () => {
    return (
        <div className='web-service'>

            <div className="web-service1">
                <div className="web-service1-left">
                <video className="video-bg" autoPlay muted loop src={video}></video>
                </div>

                <div className="web-service1-right">
                    <div className="web-service-right1">

                        Website Development
                    </div>
                    <div className="web-service-right2">

                    Website Development<br/>
                    Company in India
                    </div>

                    <div className="web-service-right3">
                        <button>Start a project together</button>

                    </div>
                    <div className="web-service-right4">
                        <button>call us</button>

                    </div>

                </div>



            </div>

            <div className="web-service2">

                <div className="web-service2-left">
                    <div className="web-service2-left1">
                        Website Development
                    </div>

                    <div className="web-service2-left2">
                        Web Development is one of the most beautiful things<br />
                        which attract the customer more. If you know the most<br />
                        famous line that the first impression is the last,” then you<br />
                        know that why web design is very important. Everyone<br />
                        instantly likes a webpage that is designed in a very <br />
                        précise manner and fully in categorization. No one <br />
                        wants to visit the website where they have spent almost<br />
                        hours but cannot find the desired thing they want. Web <br />
                        designing helps you to make your webpage more<br />
                        attractive than ever before. It also helps things to get in<br />
                        place in the proper positions where they need to be. The<br />
                        customer loves to visit the sites repeatedly, which is<br />
                        properly made by a professional and must be attractive<br />
                        to see.


                    </div>

                </div>

                <div className="web-service2-right">
                    <img src={webdev1} alt="" />
                    {/* <video className="video-bg" autoPlay muted loop src={Switch}></video> */}

                </div>


            </div>

            <div className="web-service3">
                <div className="web-service3-first">
                    What we deliver
                </div>
                <div className="web-service3-second">
                    Aayan Infotech gives you the best of web design from their highly skilled and experienced web designers. Not<br />
                    only this, we have kept every factor in mind that is in required for an incredible web page, such as which <br />
                    color, fonts, and texture to use. We assemble all the information and data in a very categorized and<br />
                    précised manner. So that the user will find it very handy to have access to it. Every user wants a user-<br />
                    friendly website, and we are very much professional in providing that quality service to the customers.
                </div>

            </div>

            <div className="web-service4">
                Reasons for using website: –
            </div>

            <div className="web-service5">
                <div className="web-service5-left">
                    <div className="web-service5-left-top">
                        <img src={webdev2} alt="" />
                    </div>

                    <div className="web-service5-left-bottom">
                        <div className="web-service5-left-bottom1">
                            Availability
                        </div>

                        <div className="web-service5-left-bottom2">
                            Present 24/7 online
                        </div>

                        <div className="web-service5-left-bottom3">
                            It is essential to anyone, anywhere, anytime, which is one of the most major<br />
                            advantages. The website serves its customers so that the customer who<br />
                            enters the page is satisfied and does need not to go to the other website. So,<br />
                            we provide our customers with a 24/7 online service. Thus, we assure our <br />
                            customers would be satisfied through our website and visit more and more for<br />
                            their help or doubt clearance.
                        </div>

                    </div>

                </div>
                <div className="web-service5-right">
                    <div className="web-service5-right-top">
                        <img src={webdev3} alt="" />
                    </div>

                    <div className="web-service5-right-bottom">
                        <div className="web-service5-right-bottom1">
                            Support
                        </div>

                        <div className="web-service5-right-bottom2">
                            Presence of 24/7 customer support
                        </div>

                        <div className="web-service5-right-bottom3">
                            While using the website, customers, some or the other way, experience<br />
                            difficulty. The toughest job for any website is providing customer support. So,<br />
                            this website is supportive and beneficial for the customer. They can clear the<br />
                            doubt through some techniques like FAQs, chatbox, etc. Our website also<br />
                            provides a presence of 24/7 customer service, which has been seen by our<br />
                            customers as very beneficial for them and is left out by no complaints.
                        </div>

                    </div>

                </div>



            </div>


            <div className="web-service6">
                <div className="web-service5-left">
                    <div className="web-service5-left-top">
                        <img src={webdev4} alt="" />
                    </div>

                    <div className="web-service5-left-bottom">
                        <div className="web-service5-left-bottom1">
                            Growth
                        </div>

                        <div className="web-service5-left-bottom2">
                            Sales
                        </div>

                        <div className="web-service5-left-bottom3">
                            We all know that there are millions of members or population in the whole<br />
                            world. They how far will need things which could be gadgets, utensils,<br />
                            clothes, etc. Now, the website breaks geographical barriers and ultimately<br />
                            increases the sales of the business.
                        </div>

                    </div>

                </div>


                <div className="web-service6-right">
                    <div className="web-service6-right-top">
                        <img src={webdev5} alt="" />
                    </div>

                    <div className="web-service6-right-bottom">
                        <div className="web-service6-right-bottom1">
                            Differentiator
                        </div>

                        <div className="web-service6-right-bottom2">
                            Maintaining ownership:
                        </div>

                        <div className="web-service6-right-bottom3">
                            The company needs to protect the brand identity by owning a web address <br />
                            and website. This will avoid controlling website content or brand to be shared<br />
                            with a third party. Owning your domain name and using it as a reputable host<br />
                            company is just important as choosing the domain name itself. Owning your<br />
                            domain name is vital to the business.

                        </div>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default WebDevService



// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './WebDevService.scss';
// import webdev1 from './image/webdev1.png';
// import webdev2 from './image/webdev2.png';
// import webdev3 from './image/webdev3.png';
// import webdev4 from './image/webdev4.png';
// import webdev5 from './image/webdev5.png';
// import video from './image/video.mp4';
// import Switch from './image/Switch.mp4';

// const WebDevService = () => {
//     return (
//         <div className="container">

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <video className="w-100" autoPlay muted loop src={video}></video>
//                 </div>
//                 <div className="col-md-6 text-center my-auto">
//                     <h1>Website Development</h1>
//                     <h2>Website Development<br />Company in India</h2>
//                     <button className="btn btn-dark my-3">Start a project together</button><br/>
//                     <button className="btn btn-outline-dark my-3">Call us</button>
//                 </div>
//             </div>

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <h1>Website Development</h1>
//                     <p>
//                         Web Development is one of the most beautiful things
//                         which attract the customer more. If you know the most
//                         famous line that the first impression is the last,” then you
//                         know that why web design is very important. Everyone
//                         instantly likes a webpage that is designed in a very 
//                         précise manner and fully in categorization. No one 
//                         wants to visit the website where they have spent almost
//                         hours but cannot find the desired thing they want. Web 
//                         designing helps you to make your webpage more
//                         attractive than ever before. It also helps things to get in 
//                         place in the proper positions where they need to be. The
//                         customer loves to visit the sites repeatedly, which is
//                         properly made by a professional and must be attractive
//                         to see.
//                     </p>
//                 </div>
//                 <div className="col-md-6">
//                     <img src={webdev1} className="img-fluid" alt="Web Development" />
//                 </div>
//             </div>

//             <div className="row my-5 text-center bg-success text-white p-5 rounded">
//                 <h1>What we deliver</h1>
//                 <p>
//                     Aayan Infotech gives you the best of web design from their highly skilled and experienced web designers. Not<br />
//                     only this, we have kept every factor in mind that is in required for an incredible web page, such as which <br />
//                     color, fonts, and texture to use. We assemble all the information and data in a very categorized and<br />
//                     précised manner. So that the user will find it very handy to have access to it. Every user wants a user-<br />
//                     friendly website, and we are very much professional in providing that quality service to the customers.
//                 </p>
//             </div>

//             <h2 className="my-5">Reasons for using website:</h2>

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <img src={webdev2} className="img-fluid" alt="Availability" />
//                     <h3 className="text-success">Availability</h3>
//                     <h4>Present 24/7 online</h4>
//                     <p>
//                         It is essential to anyone, anywhere, anytime, which is one of the most major<br />
//                         advantages. The website serves its customers so that the customer who<br />
//                         enters the page is satisfied and does need not to go to the other website. So,<br />
//                         we provide our customers with a 24/7 online service. Thus, we assure our <br />
//                         customers would be satisfied through our website and visit more and more for<br />
//                         their help or doubt clearance.
//                     </p>
//                 </div>
//                 <div className="col-md-6">
//                     <img src={webdev3} className="img-fluid" alt="Support" />
//                     <h3 className="text-success">Support</h3>
//                     <h4>Presence of 24/7 customer support</h4>
//                     <p>
//                         While using the website, customers, some or the other way, experience<br />
//                         difficulty. The toughest job for any website is providing customer support. So,<br />
//                         this website is supportive and beneficial for the customer. They can clear the<br />
//                         doubt through some techniques like FAQs, chatbox, etc. Our website also<br />
//                         provides a presence of 24/7 customer service, which has been seen by our<br />
//                         customers as very beneficial for them and is left out by no complaints.
//                     </p>
//                 </div>
//             </div>

//             <div className="row my-5">
//                 <div className="col-md-6">
//                     <img src={webdev4} className="img-fluid" alt="Growth" />
//                     <h3 className="text-success">Growth</h3>
//                     <h4>Sales</h4>
//                     <p>
//                         We all know that there are millions of members or population in the whole<br />
//                         world. They how far will need things which could be gadgets, utensils,<br />
//                         clothes, etc. Now, the website breaks geographical barriers and ultimately<br />
//                         increases the sales of the business.
//                     </p>
//                 </div>
//                 <div className="col-md-6">
//                     <img src={webdev5} className="img-fluid" alt="Differentiator" />
//                     <h3 className="text-success">Differentiator</h3>
//                     <h4>Maintaining ownership:</h4>
//                     <p>
//                         The company needs to protect the brand identity by owning a web address <br />
//                         and website. This will avoid controlling website content or brand to be shared<br />
//                         with a third party. Owning your domain name and using it as a reputable host<br />
//                         company is just important as choosing the domain name itself. Owning your<br />
//                         domain name is vital to the business.
//                     </p>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default WebDevService;




