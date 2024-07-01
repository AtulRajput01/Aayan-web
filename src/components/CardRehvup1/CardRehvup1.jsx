import React from 'react'
import "./CardRehvup1.scss";
import card1 from './image/card1.png'
import card2 from './image/card2.png'
import card3 from './image/card3.png'
import card4 from './image/card4.png'
import card5 from './image/card5.png'

const CardRehvup1 = () => {
    return (
        <div className="cardRehvup">
            <div className='CardRehvup1'>
                <div className="card-left">
                    <div className="card-left1">
                        WEBSITE AND APPLICATION<br />
                        DEVELOPMENT<br />
                        <p1>
                            RehvUp
                        </p1>
                    </div>
                    <div className="card-left2">
                        <p>Happy Customer</p>
                        RehvUp is a new behaviorally based work “happiness”<br />
                        platform leveraging world class Employee Experience<br />
                        (EX) Coaches to inspire, fascinate, learn and delight<br />
                        workers for greater happiness and purpose in the <br />
                        workplace.

                    </div>

                    <div className="card-left3">
                        <span1>Client</span1>
                        <span2>RehvUp</span2>
                    </div>

                    <div className="card-left4">
                        <span3>Industry</span3>
                        <span4>Enterprise</span4>
                    </div>

                </div>

                <div className="card-right">
                    <img src={card1} alt="" />

                </div>
            </div>

            <div className="CardRehvup2">
                Key Highlights

            </div>
            <div className="CardRehvup3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Nostrum nihil iure quidem,
                accusantium impedit nulla maiores labore possimus porro<br />
                aspernatur, facilis totam quis, fuga amet quisquam <br />
                deleniti in quam. Omnis exercitationem explicabo sapiente <br />
                asperiores quos eos deserunt sed iste minus qui at<br />
                quam distinctio totam consectetur modi, vitae cum atque.

            </div>

            <div className="CardRehvup4">
            <img src={card2} alt="" />

            </div>
            <div className="CardRehvup5">
            <img src={card3} alt="" />
            <img src={card4} alt="" />
            <img src={card5} alt="" />

            </div>
            
        </div>

    )
}

export default CardRehvup1