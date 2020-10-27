import React from 'react';
import PropTypes from 'prop-types';
import { ChildrenPropType } from '../../types/children.type';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({
  children,
  type,
  onClick,
  isGoogleSignIn,
  inverted,
}) => (
  <CustomButtonContainer
    isGoogleSignIn={isGoogleSignIn}
    inverted={inverted}
    type={type}
    onClick={onClick}
  >
    { children }
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  children: ChildrenPropType,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

CustomButton.defaultProps = {
  children: [],
  type: 'button',
  onClick: () => {},
  isGoogleSignIn: false,
  inverted: false,
};

export default CustomButton;
