"use client";



import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isDeveloperDropdownOpen, setDeveloperDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProductsDropdownToggle = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleDeveloperDropdownToggle = () => {
    setDeveloperDropdownOpen(!isDeveloperDropdownOpen);
  };

const smoothScrollTo = (sectionId : string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <div>
        <img src="/picknpin_logo.png" id='logo-img' alt="" />
      </div>
      <div className='header-items'>
        <div id='navbar-items' className={isSticky ? 'sticky-navbar' : 'navbar'}>
          <a  onClick={() => smoothScrollTo('home')}>Home</a>
          <div
            className="products-dropdown"
            onMouseEnter={handleProductsDropdownToggle}
            onMouseLeave={handleProductsDropdownToggle}
          >
            <a onClick={handleProductsDropdownToggle}>Products</a>
            {isProductsDropdownOpen && (
              <div className="products-dropdown-content" id={isSticky? "sticky-products-dropdown": "non-sticky-products-dropdown"}>
                <div>
                  <a className='product-dropdown-items' href="#">
                    <img className='product-icons' src="/clarity_details-line.svg" alt="Details Icon" />
                    <p>Pincode Details</p> 
                  </a>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/Vector.svg" alt="District Icon" /> <p>District Details</p></a>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/nearby pincodes icon.svg"alt="Nearby pincodes Icon" /> <p>Nearby Pincodes</p></a>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/Vector (2).svg" alt="TDistance between two pincodes Icon" /><p>Distance between two pincodes</p> </a>
                </div>
                <div>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/Vector (1).svg" alt="District of a pincode Icon" /> <p>District of a specific pincode</p></a>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/shield_icon.svg" alt="Validate Pincode Icon" /> <p>Validate Pincode</p></a>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/Track Order.svg" alt="Track Order Icon" /><p>Lead Tracking</p></a>
                  <a className='product-dropdown-items'  href="#"><img className='product-icons' src="/globe_icon.svg" alt="Globe Icon" /> <p>Nearby Pincodes By Latitude and Longitude</p></a>
                </div>
             
               
              </div>
            )}
          </div>
          <div
            className="api-dropdown"
            onMouseEnter={handleDeveloperDropdownToggle}
            onMouseLeave={handleDeveloperDropdownToggle}
          >
            <a onClick={handleDeveloperDropdownToggle}>Developer</a>
            {isDeveloperDropdownOpen && (
              <div className="api-dropdown-content"  id={isSticky? "sticky-api-dropdown": "non-sticky-api-dropdown"}>
                <a href="/api-playground">API Playground</a>
                <a href="/api-documentation">API Documentation</a>
              </div>
            )}
          </div>
          <a  onClick={() => smoothScrollTo('contactus-section')}>Contact</a>
          <a  onClick={() => smoothScrollTo('pricing-section')}>Pricing</a>
        </div>
        <div>
          <button className={isSticky ? 'sticky-signup-btn' : 'signup-btn'}>SIGN UP</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

