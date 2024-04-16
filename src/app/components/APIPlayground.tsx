import React from 'react';
import APIProduct from './APIProduct';
import { apiProducts } from '../components/api-products';

const APIPlayground = () => {
  return (
    <div id='api-playground'>
      <h1>API Playground</h1>
      <div className='api-playground-items'>
      {apiProducts.map((product, index) => (
        <APIProduct
          key={product.id} // Make sure to provide a unique key for each component in the array
          title={product.title}
          imagePath={product.imagePath}
          features={product.features}
        />
      ))}
      </div>
  
    </div>
  );
}

export default APIPlayground;
