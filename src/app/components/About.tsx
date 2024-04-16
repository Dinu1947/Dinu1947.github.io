import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div id='about'>
        <div id='about-content'>
            <h1>Unlocking Geo-spatial Insights</h1>
            <p className='about-text'>Explore our comprehensive suit of APIs for an easy access to extensive pincode and location-based information, tailored for developers</p>
            <div id='about-btns'>
                <button className='explore-btn'>Explore now <FontAwesomeIcon icon={faArrowAltCircleRight} />
</button>
                <button className='getstarted-btn'>Get Started</button>
            </div>
        </div>
        <div id='about-imgs'>
            <img className='globe-img' src="/globe.gif" alt="" />
            <img className='map-pin-img' src="/map-pin.gif" alt="" />
        </div>
    </div>
  );
}

export default About;
