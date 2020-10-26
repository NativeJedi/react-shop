import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem as addItemAction,
  clearItemFromCart,
  removeItem as removeItemAction,
} from '../../redux/cart/cart.actions';
import { CartItemPropType } from '../../types/cart-item.type';
import {
  CheckoutImageContainer,
  CheckoutItemContainer,
  CheckoutNameContainer,
  CheckoutPriceContainer,
  CheckoutRemoveButtonContainer,
  QuantityArrowContainer,
  QuantityContainer,
  QuantityValueContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
  const {
    imageUrl,
    name,
    price,
    quantity,
  } = item;

  const dispatch = useDispatch();

  const clearItem = (cartItem) => dispatch(clearItemFromCart(cartItem));
  const addItem = (cartItem) => dispatch(addItemAction(cartItem));
  const removeItem = (cartItem) => dispatch(removeItemAction(cartItem));

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutNameContainer>{name}</CheckoutNameContainer>
      <QuantityContainer>
        <QuantityArrowContainer
          className="btn-default"
          onClick={() => removeItem(item)}
        >
          &#10094;
        </QuantityArrowContainer>
        <QuantityValueContainer>{quantity}</QuantityValueContainer>
        <QuantityArrowContainer
          className="btn-default"
          onClick={() => addItem(item)}
        >
          &#10095;
        </QuantityArrowContainer>
      </QuantityContainer>
      <CheckoutPriceContainer>{price}</CheckoutPriceContainer>
      <CheckoutRemoveButtonContainer
        className="btn-default"
        onClick={() => clearItem(item)}
      >
        &#10005;
      </CheckoutRemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

CheckoutItem.propTypes = {
  item: CartItemPropType.isRequired,
};

export default CheckoutItem;
