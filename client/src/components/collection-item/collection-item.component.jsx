import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
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
}) => {
  const { price, name, imageUrl } = item;

  const dispatch = useDispatch();

  const addItem = useCallback(() => dispatch(addItemAction(item)), [dispatch, item]);

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
};

export default CollectionItem;
