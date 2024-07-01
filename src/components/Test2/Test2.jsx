// import React from 'react'
// import './Test2.scss'

// const Test2 = () => {
//     return (
//         <div className='trust'>
//             <div className="trust1">
//             <img src="src\components\Test2\img\Frame 1000001841.png" alt="" />
//             </div>
//             <div className="heading">
//                 Trusted By
//             </div>
//             <p>
//             In the last 6 years of our existence, we have partnered with 700+ businesses across the world.
//             </p>

//         </div>
//     )
// }

// export default Test2


import React from 'react';
import './Test2.scss';

const TrustedBy = () => {
  return (
    <div className="container">
        {/* <div className="img-sec">
            <img src="src\components\Test2\img\Frame 1000001841.png" alt="" />
        </div> */}
      <h2 className="header">Trusted By</h2>
      <p className="description">
        In the last 6 years of our existence, we have partnered with 700+ businesses across the world
      </p>
      <div className="logos">
        <div className="marquee">
          <img src="src/components/Test2/img/image11.png" alt="Logo 1" className="logo" />
          <img src="src/components/Test2/img/image12.png" alt="Logo 2" className="logo" />
          <img src="src/components/Test2/img/image13.png" alt="Logo 3" className="logo" />
          <img src="src/components/Test2/img/image14.png" alt="Logo 4" className="logo" />
          <img src="src/components/Test2/img/image15.png" alt="Logo 5" className="logo" />
          <img src="src/components/Test2/img/image16.png" alt="Logo 6" className="logo" />
          <img src="src/components/Test2/img/image11.png" alt="Logo 1" className="logo" />
          <img src="src/components/Test2/img/image12.png" alt="Logo 2" className="logo" />
          <img src="src/components/Test2/img/image13.png" alt="Logo 3" className="logo" />
          <img src="src/components/Test2/img/image14.png" alt="Logo 4" className="logo" />
          <img src="src/components/Test2/img/image15.png" alt="Logo 5" className="logo" />
          <img src="src/components/Test2/img/image16.png" alt="Logo 6" className="logo" />
          <img src="src/components/Test2/img/image11.png" alt="Logo 1" className="logo" />
          <img src="src/components/Test2/img/image12.png" alt="Logo 2" className="logo" />
          <img src="src/components/Test2/img/image13.png" alt="Logo 3" className="logo" />
          <img src="src/components/Test2/img/image14.png" alt="Logo 4" className="logo" />
          <img src="src/components/Test2/img/image15.png" alt="Logo 5" className="logo" />
          <img src="src/components/Test2/img/image16.png" alt="Logo 6" className="logo" />
        </div>
      </div>
      <div className="stats">
        <div className="stat">700+ Clients</div>
        <div className="stat">6 Years</div>
      </div>
    </div>
  );
};

export default TrustedBy;


