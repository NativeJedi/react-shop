import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionValues } from '../../redux/shop/shop.selectors';
import { CollectionPropType } from '../../types/collection.type';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {
      collections.map(({
        id,
        title,
        items,
      }) => <CollectionPreview title={title} key={id} items={items} />)
    }
  </CollectionOverviewContainer>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(CollectionPropType).isRequired,
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionValues,
});

export default connect(mapStateToProps)(CollectionsOverview);
