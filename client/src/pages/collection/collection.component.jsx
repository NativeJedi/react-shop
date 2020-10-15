import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import { CollectionPropType } from '../../types/collection.type';
import { CollectionItems, CollectionPageSections, CollectionPageTitle } from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageSections>
      <CollectionPageTitle>{ title }</CollectionPageTitle>

      <CollectionItems>
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItems>
    </CollectionPageSections>
  );
};

CollectionPage.propTypes = {
  collection: CollectionPropType.isRequired,
};

const mapStateToProps = (state, { match }) => ({
  collection: selectShopCollection(match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
