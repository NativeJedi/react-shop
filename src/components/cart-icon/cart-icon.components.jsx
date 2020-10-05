import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCart as toggleCartAction } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCart, cartItemsCount }) => (
  <button
    className="cart-icon btn-default"
    onClick={toggleCart}
  >
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__counter">{cartItemsCount}</span>
  </button>
);

CartIcon.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  cartItemsCount: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartAction()),
});

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
