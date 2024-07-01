import React from 'react'
import "./CardRehvup2.scss";
import card6 from './image/card6.png'
import card7 from './image/card7.png'
import card8 from './image/card8.png'
import card9 from './image/card9.png'
import card10 from './image/card10.png'

const CardRehvup1 = () => {
    return (
        <div className="cardRehvup">
            <div className='CardRehvup1'>
                <div className="card-left">
                    <div className="card-left1">
                        WEBSITE AND APPLICATION<br />
                        DEVELOPMENT<br />
                        <span>
                            RehvUp
                        </span>
                    </div>
                    <div className="card-left2">
                        <p>Happy Customer</p>
                        Explore The Roundup, your ultimate guide to Canadian<br/>
                         beef! Crafted by Canada Beef experts, this comprehensive<br/>
                          app offers beef cut info, recipes, cooking tips, and videos.<br/>
                           Buy the perfect cut, cook with confidence, and savor<br/>
                            premium Canadian beef, proudly raised by our farmers <br/>
                            and ranchers. Look for the Canadian Beef symbol when shopping!


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
                    <img src={card6} alt="" />

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
            <img src={card7} alt="" />

            </div>
            <div className="CardRehvup5">
            <img src={card8} alt="" />
            <img src={card9} alt="" />
            <img src={card10} alt="" />

            </div>
            
        </div>

    )
}

export default CardRehvup1