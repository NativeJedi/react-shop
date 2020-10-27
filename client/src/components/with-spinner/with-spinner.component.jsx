import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => {
  const ComponentWithLoader = (props) => {
    const { isLoading, ...otherProps } = props;

    return isLoading
      ? <Spinner />
      : <WrappedComponent {...otherProps} />;
  };

  ComponentWithLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  return ComponentWithLoader;
};

export default WithSpinner;
