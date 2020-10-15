import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { CartItemPropType } from '../../types/cart-item.type';
import { addItem as addItemAction } from '../../redux/cart/cart.actions';
import {
  CollectionCustomButton,
  CollectionFooterContainer,
  CollectionImageContainer,
  CollectionItemContainer,
} from './collection-item.styles';

const CollectionItem = ({
  item,
  addItem,
}) => {
  const { price, name, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionImageContainer imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <span>{ name }</span>
        <span>{ price }</span>
      </CollectionFooterContainer>

      <CollectionCustomButton
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CollectionCustomButton>
    </CollectionItemContainer>
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
