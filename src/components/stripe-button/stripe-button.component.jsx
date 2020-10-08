import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { StripeContainer, WarningMessage } from './stripe-button.styles';

const STRIPE_API_KEY = 'pk_test_51HZEXKHQarsc8i8zbqJegMNUfr8tUicgj6sXc3Vz5CgPIWea67dQxdRV2fojAFiHBdKKkY45iS75QVMDF0reMGyx00WHPhwJU1';

const onToken = () => {
  alert('Payment successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  return (
    <StripeContainer>
      <WarningMessage>
        <p>Please, use the following test credential card for payments</p>
        <p>4242 4242 4242 4242 - Exp: 01/next year - CVV: 123</p>
      </WarningMessage>
      <StripeCheckout
        label="Pay now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={STRIPE_API_KEY}
      />
    </StripeContainer>
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
