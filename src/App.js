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

  // if (loggedIn){
  //   let decode = jwt_decode(loggedIn);
  //   console.log(decode);
  //   let username = decode.username;
  //   let getUser = async () => {await JoblyApi.getUser(username)};
  //   let user = getUser();
  //   console.log(user);
    
  // }
  async function setCurrentUser(username) {
    if (username) {
      console.log("username",username)
      let user = await JoblyApi.getUser(username);
      console.log("user", user)
      setUser(user.user);
    };
  };

  useEffect(()=>{
    console.log("using effect")
    if (loggedIn){
    let decode = jwt_decode(loggedIn);
    let username = decode.username;
    setCurrentUser(username);
    }
    
  },[loggedIn]);
 

  // const storeUser = (newUser) => {
  //   setUser(newUser);
  // };
  // const getUser = () => {

  // };

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
}

export default App;
export { UserContext };
