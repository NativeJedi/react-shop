import PropTypes from 'prop-types';
import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="collection-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="collection-footer__name">{ name }</span>
      <span className="collection-footer__price">{ price }</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CollectionItem;
