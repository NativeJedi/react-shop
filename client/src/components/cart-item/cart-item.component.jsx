import React from 'react';
import { CartItemPropType } from '../../types/cart-item.type';
import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemImageContainer,
  CartItemNameContainer,
} from './cart-item.styles';

const CartItem = ({
  item: {
    imageUrl,
    name,
    price,
    quantity,
  },
}) => (
  <CartItemContainer>
    <CartItemImageContainer
      src={imageUrl}
      alt={name}
    />

    <CartItemDetailsContainer>
      <CartItemNameContainer>{name}</CartItemNameContainer>
      <span>
        {quantity}
        x $
        {price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

CartItem.propTypes = {
  item: CartItemPropType.isRequired,
};

export default React.memo(CartItem);
