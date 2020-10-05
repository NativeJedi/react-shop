import React from 'react';
import PropTypes from 'prop-types';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {
  addItem as addItemAction,
  clearItemFromCart,
  removeItem as removeItemAction,
} from '../../redux/cart/cart.actions';
import { CartItemPropType } from '../../types/cart-item.type';

const CheckoutItem = ({
  item,
  addItem,
  removeItem,
  clearItem,
}) => {
  const {
    imageUrl,
    name,
    price,
    quantity,
  } = item;

  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-quantity">
        <button
          className="btn-default checkout-quantity__arrow"
          onClick={() => removeItem(item)}
        >
          &#10094;
        </button>
        <span className="checkout-quantity__value">{quantity}</span>
        <button
          className="btn-default checkout-quantity__arrow"
          onClick={() => addItem(item)}
        >
          &#10095;
        </button>
      </span>
      <span className="checkout-item__price">{price}</span>
      <button
        className="checkout-item__remove-button btn-default"
        onClick={() => clearItem(item)}
      >
        &#10005;
      </button>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: CartItemPropType.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
