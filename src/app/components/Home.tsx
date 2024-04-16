import React from 'react';
import Header from './Header';
import About from './About';

const Home = () => {
  return (
    <div id='home' data-section-name="Home">
 



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
  <path fill='#090A15' d="M0,0L600,0
     C900,200 700,300 900,400 
     C1100,500 900,600 1440,900 
     L1440,900 
     L0,900 
    Z" />
</svg>


      <Header/>
      <About/>
    </div>
  );
}

export default Home;
