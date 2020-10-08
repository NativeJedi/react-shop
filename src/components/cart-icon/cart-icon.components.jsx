import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { toggleCart as toggleCartAction } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartCounterContainer, CartIconContainer, ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCart, cartItemsCount }) => (
  <CartIconContainer
    className="btn-default"
    onClick={toggleCart}
  >
    <ShoppingIconContainer as={ShoppingIcon} />
    <CartCounterContainer>{cartItemsCount}</CartCounterContainer>
  </CartIconContainer>
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
