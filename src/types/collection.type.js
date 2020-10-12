import PropTypes from 'prop-types';
import { CollectionItemPropType } from './collection-item.type';

export const CollectionPropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  routeName: PropTypes.string,
  items: PropTypes.arrayOf(CollectionItemPropType),
});
