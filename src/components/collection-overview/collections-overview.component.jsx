import './collections-overview.styles.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionValues } from '../../redux/shop/shop.selectors';
import { CollectionPropType } from '../../types/collection.type';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({
        id,
        title,
        items,
      }) => <CollectionPreview title={title} key={id} items={items} />)
    }
  </div>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(CollectionPropType).isRequired,
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionValues,
});

export default connect(mapStateToProps)(CollectionsOverview);
