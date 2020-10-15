import PropTypes from 'prop-types';

export const CartItemPropType = PropTypes.shape({
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  quantity: PropTypes.number,
});
