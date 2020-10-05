import React from 'react';
import './cart-item.styles.scss';
import { CartItemPropType } from '../../types/cart-item.type';

const CartItem = ({
  item: {
    imageUrl,
    name,
    price,
    quantity,
  },
}) => (
  <div className="cart-item">
    <img
      className="cart-item__img"
      src={imageUrl}
      alt={name}
    />

    <div className="cart-item__details">
      <span className="cart-item__name">{name}</span>
      <span>
        {quantity}
        x $
        {price}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: CartItemPropType.isRequired,
};

export default CartItem;
