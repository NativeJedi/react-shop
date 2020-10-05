import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { CartItemPropType } from '../../types/cart-item.type';
import CustomButton from '../custom-button/custom-button.component';
import { addItem as addItemAction } from '../../redux/cart/cart.actions';

const CollectionItem = ({
  item,
  addItem,
}) => {
  const { price, name, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item-footer">
        <span className="collection-item-footer__name">{ name }</span>
        <span className="collection-item-footer__price">{ price }</span>
      </div>

      <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: CartItemPropType.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
