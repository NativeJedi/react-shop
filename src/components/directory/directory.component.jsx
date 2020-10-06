import './directory.styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { SectionPropType } from '../../types/section.type';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({
        title,
        id,
        imageUrl,
        size,
        linkUrl,
      }) => (
        <MenuItem
          key={id}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          title={title}
          size={size}
        />
      ))
    }
  </div>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(SectionPropType).isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
