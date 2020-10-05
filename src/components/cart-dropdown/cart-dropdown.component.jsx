import React from 'react';
import PropTypes from 'prop-types';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CartItemPropType } from '../../types/cart-item.type';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      { cartItems.map((item) => <CartItem key={item.id} item={item} />) }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(CartItemPropType).isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
