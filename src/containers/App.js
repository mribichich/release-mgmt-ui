import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import ApplicationsContainer from './ApplicationsContainer'
import ApplicationCreateContainer from './ApplicationCreateContainer'
import ApplicationDetailsContainer from './ApplicationDetailsContainer'

const App = ({ style }) => (
  <div style={style}>
    <AppBar
      title="Release Management"
    />
    {/*<div>
      <h2>Release Management</h2>
    </div>*/}

    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/releases">Releases</Link></li>
      </ul>
    </div>

    <div>
      <Switch>
        <Route exact path="/applications" component={ApplicationsContainer} />
        <Route path="/applications/create" component={ApplicationCreateContainer} />
        <Route path="/applications/details/:name" component={ApplicationDetailsContainer} />
        <Route path="/releases" render={() => (
          <h3>Releases</h3>
        )} />
      </Switch>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node
}

export default App;
