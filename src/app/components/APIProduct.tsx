import React from 'react';
import Link from 'next/link';


interface APIProductCard {
  title: string;
  imagePath: string;
  features: string;
}

const APIProduct: React.FC<APIProductCard> = (props) => {
  const slug = props.title.toLowerCase().replace(/\s+/g, '-');
  const productUrl = `/api-playground/${slug}`;

  return (
    <div id='api-product'>
      <div className='product-img-title'>
        <img src={props.imagePath} alt="" />
        <h3>{props.title}</h3>
      </div>
      <p>{props.features}</p>
      <Link href={productUrl} id='try-it'>
          <img src="/Bolt-icon.png" alt="" />
          <p>Try it</p>
      </Link>
    </div>
  );
}

export default APIProduct;
