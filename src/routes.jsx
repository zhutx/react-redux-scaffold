import React from 'react'; // 引入react
import { Router, Route, hashHistory } from 'react-router'; // 引入react-router
import Login from './containers/Login';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
  </Router>
);

export default Routes;
