import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { HistoryPropType } from '../../types/history.type';
import { MatchPropType } from '../../types/match.type';
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
  match,
  history,
}) => {
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
  history: HistoryPropType.isRequired,
  match: MatchPropType.isRequired,
};

MenuItem.defaultProps = {
  size: '',
};

export default withRouter(MenuItem);
