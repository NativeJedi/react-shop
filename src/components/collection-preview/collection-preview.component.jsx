import React from 'react';
import './collection-preview.styles.scss';
import PropTypes from 'prop-types';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="collection-preview__title">{ title }</h1>
    <div className="collection-preview__preview">
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
    </div>
  </div>
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
