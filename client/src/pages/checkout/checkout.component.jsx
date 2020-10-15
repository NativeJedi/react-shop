import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { CartItemPropType } from '../../types/cart-item.type';
import {
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutPageSection,
  CheckoutTotalContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <CheckoutPageSection>
    <CheckoutHeader>
      <CheckoutHeaderBlock>Product</CheckoutHeaderBlock>
      <CheckoutHeaderBlock>Description</CheckoutHeaderBlock>
      <CheckoutHeaderBlock>Quantity</CheckoutHeaderBlock>
      <CheckoutHeaderBlock>Price</CheckoutHeaderBlock>
      <CheckoutHeaderBlock>Remove</CheckoutHeaderBlock>
    </CheckoutHeader>

    {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}

    <CheckoutTotalContainer>
      Total: $
      { cartItemsTotal }
    </CheckoutTotalContainer>

    <StripeCheckoutButton price={cartItemsTotal} />
  </CheckoutPageSection>
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
