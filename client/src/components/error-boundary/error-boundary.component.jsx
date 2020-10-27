import React from 'react';
import { ChildrenPropType } from '../../types/children.type';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
          <ErrorImageText>This Page is Lost in Space</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: ChildrenPropType.isRequired,
};

export default ErrorBoundary;
