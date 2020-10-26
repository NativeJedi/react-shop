import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { toggleCart as toggleCartAction } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartCounterContainer, CartIconContainer, ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCart = useCallback(
    () => dispatch(toggleCartAction()),
    [dispatch],
  );

  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <CartIconContainer
      className="btn-default"
      onClick={toggleCart}
    >
      <ShoppingIconContainer as={ShoppingIcon} />
      <CartCounterContainer>{cartItemsCount}</CartCounterContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
