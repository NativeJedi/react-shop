import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
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
};

export default Directory;
