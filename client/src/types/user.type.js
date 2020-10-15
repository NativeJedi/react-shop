import PropTypes from 'prop-types';

export const UserPropType = PropTypes.shape({
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
    nanoseconds: PropTypes.number,
  }),
  email: PropTypes.string,
  displayName: PropTypes.string,
  id: PropTypes.string,
});
