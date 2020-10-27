import PropTypes from 'prop-types';

export const ChildrenPropType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.string,
]);
