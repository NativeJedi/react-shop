import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

const Tab1 = (...props) => {
  console.log(props);
  return (
    <h1>Tab 1</h1>
  );
};

const Tab2 = () => (
  <h1>Tab 2</h1>
);

export const HatsPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <div>Hats</div>
      <div>
        <Link to={`${match.url}`}>Tab 1</Link>
        <Link to={`${match.url}/tab2`}>Tab 2</Link>
      </div>

      <div>
        <Switch>
          <Route path={`${match.path}/tab2`}>
            <Tab2 />
          </Route>
          <Route path={match.path} component={Tab1} />
        </Switch>
      </div>
    </div>
  );
};

HatsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
