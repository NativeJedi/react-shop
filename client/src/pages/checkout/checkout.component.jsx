import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutPageSection,
  CheckoutTotalContainer,
} from './checkout.styles';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotal = useSelector(selectCartTotal);

  return (
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
};

export default CheckoutPage;
