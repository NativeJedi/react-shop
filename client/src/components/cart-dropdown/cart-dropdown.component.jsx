import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CartDropdownContainer, DropdownItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleCheckoutRedirect = useCallback(() => {
    history.push('/checkout');
    dispatch(toggleCart());
  }, [history, dispatch]);

  return (
    <CartDropdownContainer>
      <DropdownItemsContainer>
        {
          cartItems.length
            ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
            : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </DropdownItemsContainer>
      <CustomButton onClick={handleCheckoutRedirect}>
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
