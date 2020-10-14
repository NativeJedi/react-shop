import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  MenuItemBackground,
  MenuItemContainer,
  MenuItemContent,
  MenuItemSubtitle,
  MenuItemTitle,
} from './menu-item.styles';

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
}) => {
  const history = useHistory();
  const match = useRouteMatch();

  const handleRoute = ({ key }) => {
    if (key && key !== 'Enter') {
      return;
    }

    history.push(`${match.path}${linkUrl}`);
  };

  return (
    <MenuItemContainer
      role="button"
      tabIndex={0}
      onKeyUp={handleRoute}
      onClick={handleRoute}
      size={size}
    >
      <MenuItemBackground imageUrl={imageUrl} />

      <MenuItemContent>
        <MenuItemTitle>{ title }</MenuItemTitle>
        <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  size: '',
};

export default MenuItem;
