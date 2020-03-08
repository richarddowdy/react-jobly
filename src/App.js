import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Routes from './Routes';
import { useLocalStorage } from './hooks';
import JoblyApi from './JoblyApi';
import jwt_decode from 'jwt-decode';

const UserContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = useLocalStorage("_token");
  const [user, setUser] = useState({});

  async function setCurrentUser(username) {
    if (username) {
      let user = await JoblyApi.getUser(username);
      setUser(user.user);
    };
  };

  useEffect(() => {
    if (loggedIn) {
      let decode = jwt_decode(loggedIn);
      let username = decode.username;
      setCurrentUser(username);
    }
  }, [loggedIn]);

  const handleLogin = (token) => {
    setLoggedIn(token);
  }

  const handleLogOut = () => {
    setLoggedIn(null);
    localStorage.removeItem("_token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar loggedIn={loggedIn} handleLogOut={handleLogOut} />
          <Routes loggedIn={loggedIn} handleLogin={handleLogin} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
export { UserContext };
