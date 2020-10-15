import PropTypes from 'prop-types';

export const SectionPropType = PropTypes.shape({
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  linkUrl: PropTypes.string,
  size: PropTypes.string,
});
