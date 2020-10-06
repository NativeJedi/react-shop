import './collection.styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import { CollectionPropType } from '../../types/collection.type';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h1 className="collection-page__title">{ title }</h1>

      <div className="collection-page__items">
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

CollectionPage.propTypes = {
  collection: CollectionPropType.isRequired,
};

const mapStateToProps = (state, { match }) => ({
  collection: selectShopCollection(match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
