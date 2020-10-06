import './stripe-button.styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_API_KEY = 'pk_test_51HZEXKHQarsc8i8zbqJegMNUfr8tUicgj6sXc3Vz5CgPIWea67dQxdRV2fojAFiHBdKKkY45iS75QVMDF0reMGyx00WHPhwJU1';

const onToken = (token) => {
  console.log(token);
  alert('Payment successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  return (
    <div className="stripe-wrap">
      <div className="warning-message">
        <p>Please, use the following test credential card for payments</p>
        <p>4242 4242 4242 4242 - Exp: 01/next year - CVV: 123</p>
      </div>
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
    </div>
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
