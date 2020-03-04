import React from 'react';
import { NavLink } from 'react-router-dom';

function Home({ loggedIn }) {

  console.log("home", loggedIn)
  return (

    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place</p>
      {loggedIn ?
        <h3>Welcome Back!</h3> :
        <button>
          <NavLink exact to="/login" className="nav-link">
            Log In!
            </NavLink>
        </button>
      }
    </div>
  )

}

export default Home;

