import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  type,
  onClick,
  isGoogleSignIn,
}) => (
  <button
    className={`${isGoogleSignIn ? 'custom-button--google' : ''} custom-button`}
    type={type}
    onClick={onClick}
  >
    { children }
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool,
};

CustomButton.defaultProps = {
  children: [],
  type: 'button',
  onClick: () => {},
  isGoogleSignIn: false,
};

export default CustomButton;
