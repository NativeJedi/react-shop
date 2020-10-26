import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';
import { fetchCollectionsStart as fetchCollectionsAction } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collection-overview/collection-overview.container';
import CollectionPage from '../collection/collection.container';

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsAction());
  }, [dispatch]);

  const match = useRouteMatch();

  return (
    <section className="shop-page">
      <Route
        exact
        path={match.path}
        component={CollectionsOverview}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </section>
  );
};

export default ShopPage;
