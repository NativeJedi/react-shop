import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import { MatchPropType } from '../../types/match.type';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <section className="shop-page">
    <Route exact path={match.path} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </section>
);

ShopPage.propTypes = {
  match: MatchPropType.isRequired,
};

export default ShopPage;
