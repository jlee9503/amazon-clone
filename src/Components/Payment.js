import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='page-title'>
        <h2>Checkout (<Link to='/checkout' className='total-items'>{basket?.length} items</Link>)</h2>
      </div>

      <div className='payment-container'>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>

          <div className='delivery-address'>
            <p>{user?.email}</p>
            <p>1234 Test Address</p>
            <p>Baltimore, MD</p>
          </div>
        </div>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>

          <div className='payment-info'>

          </div>
        </div>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review your items</h3>
          </div>

          <div className='payment-item'>
            {basket.map((item => 
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='back-to-checkout'>
        <button><Link to='/checkout' className='back-to-checkout-button'>Go Back to Checkout Page</Link></button>
      </div>
    </div>
  )
}

export default Payment
