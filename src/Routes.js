import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Login from './LogIn'
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';

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
      <Route exact path = "/companies/:handle">
        <Company />
      </Route>
      <Route exact path = "/jobs">
        <Jobs />
      </Route>
      <Route exact path = "/profile">
        <Profile />
      </Route>
      <Redirect to='/login' /> 

    </Switch>
  );
};

export default Routes;