import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("Logged in:", loggedIn);
  const toggleState = () => {setLoggedIn((loggedIn) => !loggedIn)};

  const handleLogOut = () => {
    setLoggedIn(false);
    console.log("Logged out!")
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
