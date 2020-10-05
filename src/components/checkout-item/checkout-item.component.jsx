import React from 'react';
import './checkout-item.styles.scss';
import { CartItemPropType } from '../../types/cart-item.type';

const CheckoutItem = ({
  item: {
    imageUrl,
    name,
    price,
    quantity,
  },
}) => (
  <div className="checkout-item">
    <div className="checkout-item__image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="checkout-item__name">{name}</span>
    <span className="checkout-item__quantity">{quantity}</span>
    <span className="checkout-item__price">{price}</span>
    <button className="checkout-item__remove-button btn-default">&#10005;</button>
  </div>
);

CheckoutItem.propTypes = {
  item: CartItemPropType.isRequired,
};

export default CheckoutItem;
