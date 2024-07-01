import React from 'react';
import "./Design.scss";
import design from './image/design.mp4';
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import digital2 from "./image/digital2.png"


const Blockchain = () => {
    return (
        <div className='Blockchain'>
            <div className="blockchain-service1">

                <div className="digital-service1-left">

                    <video className="video-bg" autoPlay muted loop src={design}></video>

                </div>

                <div className="web-service1-right">
                    <div className="web-service-right1">
                    Design
                    </div>
                    <div className="web-service-right2">
                    Design<br />
                    Company in india
                    </div>

                    <div className="web-service-right3">
                        <button>Start a project together</button>

                    </div>
                    <div className="web-service-right4">
                        <button>call us</button>

                    </div>

                </div>



            </div>

            <div className="blockchain-service2">

                <div className="web-service2-left">
                    <div className="web-service2-left1">
                    Design
                    </div>

                    <div className="web-service2-left2">
                        We are a reputed leading digital marketing company in<br />
                        India offering world-class digital marketing services <br />
                        ranging from digital marketing strategies to improving<br />
                        your online presence and growing your business. Experience <br />
                        the benefits of digital marketing including cost-<br />
                        efficiency, precise targeting and measurable results.<br />
                        Our services include SEO, PPC, social media marketing, <br />
                        content marketing, and email marketing. By using<br />
                        digital marketing funnels, we guide potential customers<br />
                        through each stage, thereby maximizing conversion rates. <br />
                        
                    </div>

                </div>

                <div className="web-service2-right">
                    <img src={digital2} alt="" />

                </div>


            </div>

            <div className="blockchain-service3">
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

            <div className="blockchain-service4">
                Reasons for using Digital Marketing : –
            </div>

            <div className="blockchain-service5">
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

            <div className="blockchain-service6">
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

export default Blockchain