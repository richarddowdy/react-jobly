import React from 'react';
import { NavLink } from 'react-router-dom';

function Home({ loggedIn }) {

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place</p>
      {loggedIn ?
        <h3>Welcome Back!</h3> :
        <NavLink exact to="/login" className="btn btn-primary font-weight-bold" >
          Log In!
        </NavLink>
      }
    </div>
  )
};

export default Home;

