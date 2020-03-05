import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Routes from './Routes';
import { useLocalStorage } from './hooks';
import JoblyApi from './JoblyApi';


const UserContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = useLocalStorage("_token");
  const [user, setUser] = useLocalStorage("user");


  const storeUser = (newUser) => {
    setUser(oldUser => newUser);
  };

  const handleLogin = (token) => {
    setLoggedIn(token)
  }

  const handleLogOut = () => {
    setLoggedIn(null);
    localStorage.removeItem("_token");
    localStorage.removeItem("user");
  }

  const handleUpdate = async (data) => {

    let res = await JoblyApi.update(user.username, data);
    if (res) {
      setUser(res.user);

    }


    return res;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, storeUser }}>
          <NavBar loggedIn={loggedIn} handleLogOut={handleLogOut} />
          <Routes loggedIn={loggedIn} handleLogin={handleLogin} handleUpdate={handleUpdate} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { UserContext };
