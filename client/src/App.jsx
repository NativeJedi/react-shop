import React, { useCallback, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { checkUserSession as checkUserSessionAction } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';

import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Entrance from './pages/entrance/entrance.component';

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const checkUserSession = useCallback(
    () => dispatch(checkUserSessionAction()),
    [dispatch],
  );

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

export default App;
