import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { checkUserSession as checkUserSessionAction } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { UserPropType } from './types/user.type';
import Header from './components/header/header.component';

import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Entrance from './pages/entrance/entrance.component';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/entrance"
          render={() => (currentUser ? <Redirect to="/" /> : <Entrance />)}
        />
      </Switch>
    </div>
  );
};

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired,
  currentUser: UserPropType,
};

App.defaultProps = {
  currentUser: null,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSessionAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
