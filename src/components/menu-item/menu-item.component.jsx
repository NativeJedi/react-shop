import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size || ''}`}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="menu-item__background"/>

    <div className="menu-item__content">
      <h1 className="menu-item__title">{ title }</h1>
      <span className="menu-item__subtitle">SHOP NOW</span>
    </div>
  </div>
);
