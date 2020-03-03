import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
