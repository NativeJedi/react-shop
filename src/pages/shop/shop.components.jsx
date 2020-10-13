import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCollectionsStart as fetchCollectionsAction } from '../../redux/shop/shop.actions';
import { MatchPropType } from '../../types/match.type';
import CollectionsOverview from '../../components/collection-overview/collection-overview.container';
import CollectionPage from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;

    fetchCollections();
  }

  render() {
    const { match } = this.props;

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
  }
}

ShopPage.propTypes = {
  match: MatchPropType.isRequired,
  fetchCollections: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsAction()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
