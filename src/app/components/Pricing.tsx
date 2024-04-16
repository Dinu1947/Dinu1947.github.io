"use client";


import React,{useState} from 'react';
import PricingCard from './PricingCard';



const Pricing = () => {

  const [planDuration, setPlanDuration] = useState('monthly');

  function handleMonthlyClick() {
    setPlanDuration('monthly');
  }

  function handleYearlyClick() {
    setPlanDuration('yearly');
  }

  return (
    <div id='pricing-section' data-section-name="Pricing">
      <h2>CHOOSE YOUR PLAN</h2>
      <p>Flexible pricing options to suit your needs</p>
      <div className='pricing-btns'>
        <button id={planDuration==='monthly'?'active':'inactive'} onClick={handleMonthlyClick}>Monthly</button>
        <button id={planDuration==='yearly'?'active':'inactive'} onClick={handleYearlyClick}>Yearly</button>
      </div>
      <div id='pricing-cards'>
        {planDuration === 'monthly' ? (
          <>
            <PricingCard title='Trial' price='Free' duration='monthly' features={['3 API calls/day']} />
            <PricingCard title='Basic' price='$300' duration='monthly' features={['1000 API calls/day', '100 calls/hour']} />
            <PricingCard title='Pro' price='$750' duration='monthly' features={['10000 API calls/day', '1000 calls/hour', '24/7 Technical support']} />
            <PricingCard title='Premium' price='$1000' duration='monthly' features={['Unlimited API calls', '24/7 Technical support', 'Customized mapping']} />
          </>
        ) : (
          <>
            <PricingCard title='Trial' price='Free' duration='yearly' features={['3 API calls/day']} />
            <PricingCard title='Basic' price='$3000' duration='yearly' features={['1000 API calls/day', '100 calls/hour']} />
            <PricingCard title='Pro' price='$7500' duration='yearly' features={['10000 API calls/day', '1000 calls/hour', '24/7 Technical support']} />
            <PricingCard title='Premium' price='$10000' duration='yearly' features={['Unlimited API calls', '24/7 Technical support', 'Customized mapping']} />
          </>
        )}
      </div>
    </div>
  );
}

export default Pricing;
