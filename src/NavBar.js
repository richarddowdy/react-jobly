import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ loggedIn }) {

  return (

    loggedIn
    ?
      <div>
        <NavLink exact to='/'>
          Jobly
        </NavLink>
        <NavLink exact to='/companies'>
          Companies
        </NavLink>
        <NavLink exact to='/jobs'>
          Jobs
        </NavLink>
        <NavLink exact to='/profile'>
          Profile
        </NavLink>
        <NavLink exact to='/'>
          Logout
        </NavLink>
      </div>
    :
      <div>
      <NavLink exact to="/">
        Jobly
      </NavLink>
      <NavLink exact to="/login">
        Login
      </NavLink>
      </div>
  )
}

export default NavBar;

NavBar.defaultProps = {
  loggedIn : true
}