import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { SectionPropType } from '../../types/section.type';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
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
  </DirectoryContainer>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(SectionPropType).isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
