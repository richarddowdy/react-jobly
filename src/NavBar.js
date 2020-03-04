import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ loggedIn, handleLogOut }) {

  return (

    loggedIn
      ?
      <nav className="Navigation navbar navbar-expand-md">
        <NavLink exact to='/' className="navbar-brand">
          Jobly
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink exact to='/companies' className="nav-link">
              Companies
            </NavLink>
          </li>
          <li className="nav-item m-4">
            <NavLink exact to='/jobs' className="nav-link">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink exact to='/profile' className="nav-link">
              Profile
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink onClick = {handleLogOut} exact to='/' className="nav-link">
              Logout
            </NavLink>
          </li>

        </ul>
      </nav>
      :
      <nav className="Navigation navbar navbar-expand-md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink exact to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar;

