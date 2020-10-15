import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CartDropdownContainer, DropdownItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CartItemPropType } from '../../types/cart-item.type';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <DropdownItemsContainer>
        {
          cartItems.length
            ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
            : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </DropdownItemsContainer>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(CartItemPropType).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
