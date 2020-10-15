import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCollectionsStart as fetchCollectionsAction } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collection-overview/collection-overview.container';
import CollectionPage from '../collection/collection.container';

const ShopPage = ({ fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

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

ShopPage.propTypes = {
  fetchCollections: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsAction()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
