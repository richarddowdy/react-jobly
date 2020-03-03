import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
