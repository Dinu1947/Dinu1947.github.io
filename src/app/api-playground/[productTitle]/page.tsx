import Playground from '@/app/components/Playground';
import { apiProducts } from '../../components/api-products';
import NotFound from './not-found';

const allApis: string[] = apiProducts.map(product => product.title.toLowerCase().replace(/\s+/g, '-'));

type Props = {
  params: {
    productTitle: string;
  };
}

export default function ProductDetails({ params }: Props) {
  const productTitle = params.productTitle.toLowerCase(); // Convert productTitle to lowercase to match with allApis

  if (!allApis.includes(productTitle)) {
    return <NotFound />;
  }

  // Find the product object from apiProducts array
  const product = apiProducts.find(product => product.title.toLowerCase().replace(/\s+/g, '-') === productTitle);

  return (
    <>
      <Playground />
      <div id='playground-content'>
        <h2> <span style={{color: '#1F384F', marginRight: '5px'}}>API</span> {product?.title}</h2> {/* Display the title of the product */}
        <p>{product?.features}</p>
        <form action="" className='playground-form'>
          <div>
            <label htmlFor="url">URL</label>
            <input type="text" id='url' placeholder='Enter URL'/>
          </div>
          <div>
            <label htmlFor="api-key">API Key</label>
            <input type="text" name="" id="api-key" placeholder='API key' />
          </div>
          {product?.title === 'Nearby Pincodes By Latitude and Longitude' ? (
            <div>
              <label htmlFor="lat-long">Latitude & Longitude</label>
              <input type="text" name="" id="lat-long" placeholder='Latitude & Longitude' />
            </div>
          ) : null}
          <div>
            <label htmlFor="format">Format</label>
            <select name="format" id="format">
              <option value="JSON">JSON</option>
              <option value="CSV">CSV</option>
            </select>
            {/* Conditionally render pincode input fields */}
            {product?.title !== 'Nearby Pincodes By Latitude and Longitude' &&
             product?.title !== 'Distance between two pincodes' ? (
              <>
                <label htmlFor="pincode">Pincode</label>
                <input type="text" id='pincode' className='pincode-input' placeholder='Pincode'/>
              </>
            ) : null}
            {product?.title === 'Distance between two pincodes' ? (
              <>
                <label htmlFor="pincode1">Pincode 1</label>
                <input type="text" id='pincode1' className='pincode-input' placeholder='Pincode 1'/>
                <label htmlFor="pincode2">Pincode 2</label>
                <input type="text" id='pincode2' className='pincode-input' placeholder='Pincode 2'/>
              </>
            ) : null}
          </div>
          <div id='response-container'>
            Response
          </div>
          <input type="submit" value="Make Request" id='make-request'/>
        </form>
      </div>
    </>
  );
}
