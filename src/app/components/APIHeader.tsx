"use client";


import React, { useEffect, useState } from 'react';

const APIHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isDeveloperDropdownOpen, setDeveloperDropdownOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
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


  return (
    <header className={isSticky ? 'sticky-apiheader' : 'api-header'}>
      <div id='api-header-logo'>
        <img src="/api-picknpin-logo.png" alt="" />
      </div>
      <div className='header-items'>
        <div id='api-navbar-items' className='navbar'>
          <a  href='/#home'>Home</a>
          <div
            className="products-dropdown"
            onMouseEnter={handleProductsDropdownToggle}
            onMouseLeave={handleProductsDropdownToggle}
          >
            <a onClick={handleProductsDropdownToggle}>Products</a>
            {isProductsDropdownOpen && (
              <div className="products-dropdown-content" >
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
              <div className="api-dropdown-content"  >
                <a href="/api-playground">API Playground</a>
                <a href="/api-documentation">API Documentation</a>
              </div>
            )}
          </div>
          <a href='/#contactus-section'>Contact</a>
          <a href='/#pricing-section'>Pricing</a>
        </div>
        <div>
          <button  className='signup-btn'>SIGN UP</button>
        </div>
      </div>
    </header>
  );
}

export default APIHeader;
