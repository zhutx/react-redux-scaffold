import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Login from '../containers/Login';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
  </Router>
);

export default Routes;
