import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import { GlobalStyles } from './global.styles';

import { checkUserSession as checkUserSessionAction } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';

const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.components'));
const Entrance = lazy(() => import('./pages/entrance/entrance.component'));

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSessionAction());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/entrance"
              render={() => (currentUser ? <Redirect to="/" /> : <Entrance />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
