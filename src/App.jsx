import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Entrance from './pages/entrance/entrance.component';

class App extends Component {
  state = {
    currentUser: null,
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = () => {};

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Router>
          <Header currentUser={currentUser} />
          <Switch>
            <Route path="/entrance" component={Entrance} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
