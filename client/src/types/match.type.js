import PropTypes from 'prop-types';

export const MatchPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
});
