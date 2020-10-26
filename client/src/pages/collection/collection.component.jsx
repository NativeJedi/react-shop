import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import { CollectionItems, CollectionPageSections, CollectionPageTitle } from './collection.styles';

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector(selectShopCollection(collectionId));

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

export default CollectionPage;
