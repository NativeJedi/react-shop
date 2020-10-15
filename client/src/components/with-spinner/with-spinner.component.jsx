import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const ComponentWithLoader = (props) => {
    const { isLoading, ...otherProps } = props;

    return isLoading
      ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )
      : <WrappedComponent {...otherProps} />;
  };

  ComponentWithLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  return ComponentWithLoader;
};

export default WithSpinner;
