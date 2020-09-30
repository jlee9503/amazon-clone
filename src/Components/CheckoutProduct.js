import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    // remove item from shopping cart
    dispatch({
      type: "REMOVE_FROM_BASKET",
      // need product id to check if it's matched the item that we want to remove from the shopping list
      id: id,
    })
  }

  return (
		<div className="checkoutProduct">
			<img className="product-img" src={image} alt="product-image" />

			<div className="product-info">
				<p className="product-title">{title}</p>
				<p>
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<div className="product-rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐</p>
						))}
        </div>
        
        <button onClick={RemoveFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct
