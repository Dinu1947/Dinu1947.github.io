import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface PricingCardProps {
  title: string;
  price: string;
  duration:string;
  features: string[];
  // Add other props and their types here
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  return (
    <div id='pricing-card' className={props.title==='Pro'?'recommended-plan':''}>
      <div id='pricing-title'>
        <img src="" alt="" />
        <h1 className={props.title==='Pro'?'pricing-title-recommended':''}>{props.title}</h1>
      </div>
      <div>
      {props.title === "Pro"?  <span className='recommended'>Recommended</span> : ''}
      <p><span className='price'>{props.price}</span>/{props.duration}</p>
      <p>What's included</p>
      {props.features.map((feature, index) => (
        <p className='pricing-features' key={index}> <FontAwesomeIcon className={props.title==='Pro'?'check-icon-recommended':'check-icon'} icon={faCheckCircle}/> {feature}</p>
      ))}
      </div>
    
      <button id='subscribe-btn' className={props.title==='Pro'?'subscribe-btn-recommended':''}>Subscribe</button>
    </div>
  );
}

export default PricingCard;
