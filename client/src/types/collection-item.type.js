import PropTypes from 'prop-types';

export const CollectionItemPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.name,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
});
