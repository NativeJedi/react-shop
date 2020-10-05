import React from 'react';
import PropTypes from 'prop-types';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { CartItemPropType } from '../../types/cart-item.type';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <section className="checkout-page">
    <header className="checkout-header">
      <div className="checkout-header__block">Product</div>
      <div className="checkout-header__block">Description</div>
      <div className="checkout-header__block">Quantity</div>
      <div className="checkout-header__block">Price</div>
      <div className="checkout-header__block">Remove</div>
    </header>

    {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}

    <span className="checkout-page__total">
      Total: $
      { cartItemsTotal }
    </span>
  </section>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(CartItemPropType).isRequired,
  cartItemsTotal: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
