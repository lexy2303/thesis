import Lottie from 'lottie-react';
import animationData1 from '../../assets/animations/Animation11.json';
import animationData2 from '../../assets/animations/Animation12.json';

import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="newsletter">
        <div className='newsletter-subtitle'>newsletter</div>
        <div className="for-more-info">
          <input placeholder='Your Email Address' />
        </div> 
        <button className="subscribe">SUBSCRIBE NOW</button>
      </div>
      <div className="footer-info">
        <h1 className="footer-title"> A community driven record collection platform</h1>
        <div className='text-content'>Spin City Records is a blog website where you can find great vinyls. </div>
      </div>
      <div className="footer">
          <div className="footer-content">
            <div className='social'>
              <Lottie animationData={animationData1} loop={true} className="animations"/>
              <Lottie animationData={animationData2} loop={true} className="animations"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
