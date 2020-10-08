import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewWrapper,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{ title }</CollectionPreviewTitle>
    <CollectionPreviewWrapper>
      {
        items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
            />
          ))
      }
    </CollectionPreviewWrapper>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default CollectionPreview;
