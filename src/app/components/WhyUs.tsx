import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


const WhyUs = () => {
  return (
    <div id='why-us'>
      <h2>Why Choose Us?</h2>
      <div>
        We built our reputation on exceptional customer service. Discover the difference it makes. We're a team of dreamers, thinkers and creators. We're constantly evolving our products to reach even higher standards for design, quality, manufacturing and environment sustainability.

        <button className='learn-more-btn'>LEARN MORE       <FontAwesomeIcon icon={faArrowAltCircleRight} />
</button>
      </div>
      <img src="/decoration-icon.png" id='decoration-icon-1' alt="" />
      <img src="/decoration-icon.png" id='decoration-icon-2' alt="" />


    </div>
  );
}

export default WhyUs;
