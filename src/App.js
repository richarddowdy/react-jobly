import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleState = () => {setLoggedIn((loggedIn) => true)};

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("_token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn = {loggedIn} handleLogOut={handleLogOut}/>
        <Routes loggedIn = {loggedIn} toggleState = {toggleState}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
