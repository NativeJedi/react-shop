import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { firestore, parseCollections } from '../../firebase/firebase.utils';
import { setCollections as setCollectionsAction } from '../../redux/shop/shop.actions';
import { MatchPropType } from '../../types/match.type';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithLoading = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { setCollection } = this.props;

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = parseCollections(snapshot.docs);
      setCollection(collectionMap);
      this.setState({
        isLoading: false,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  unsubscribeFromSnapshot = () => {};

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <section className="shop-page">
        <Route
          exact
          path={match.path}
          render={(routeProps) => (
            <CollectionOverviewWithSpinner
              isLoading={isLoading}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(routeProps) => (
            <CollectionPageWithLoading
              isLoading={isLoading}
              {...routeProps}
            />
          )}
        />
      </section>
    );
  }
}

ShopPage.propTypes = {
  match: MatchPropType.isRequired,
  setCollection: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCollection: (collectionsMap) => dispatch(setCollectionsAction(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
