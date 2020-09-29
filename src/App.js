import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return <div className='App'>
      <Router>
        <Route path="/">
          <HomePage/>
        </Route>
      </Router>
    </div>;
  }
}

export default App;
