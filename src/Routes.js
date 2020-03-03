import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Login from './LogIn'
import Companies from './Companies';

function Routes() {
  return (
    <Switch>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path = "/login">
        <Login/>
      </Route>
      <Route exact path = "/companies">
        <Companies/>
      </Route>
    </Switch>
  );
};

export default Routes;