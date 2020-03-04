import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import {useLocalStorage} from './hooks';

function App() {
  const [loggedIn, setLoggedIn] = useLocalStorage("_token")



  const handleLogin = (token) => {
    setLoggedIn(token)
  }

  const handleLogOut = () => {
    setLoggedIn(null);
    localStorage.removeItem("_token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn = {loggedIn} handleLogOut={handleLogOut}/>
        <Routes loggedIn = {loggedIn} handleLogin={handleLogin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
