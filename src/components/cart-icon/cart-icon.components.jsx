import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCart as toggleCartAction } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCart }) => (
  <button
    className="cart-icon btn-default"
    onClick={toggleCart}
  >
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__counter">0</span>
  </button>
);

CartIcon.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartAction()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
