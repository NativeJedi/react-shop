import React from 'react';
import './menu-item.styles.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { HistoryPropType } from '../../types/history.type';

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

    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div
      className={`menu-item ${size}`}
      role="button"
      tabIndex={0}
      onKeyUp={handleRoute}
      onClick={handleRoute}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="menu-item__background"
      />

      <div className="menu-item__content">
        <h1 className="menu-item__title">{ title }</h1>
        <span className="menu-item__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  history: HistoryPropType.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

MenuItem.defaultProps = {
  size: '',
};

export default withRouter(MenuItem);
