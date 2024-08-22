import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Custom.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Biography from './biography';
import Home from './Home';

function App() {
  /*
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
  return (
    <div>
      <Header />

    </div>
  )
}

function Temp() {
  return (
    <div>Temp</div>
  );
}

function Header() {
  return (
    <div className="Header">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/biography">Biography</Link>
            </li>
          </ul>

          <hr />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/biography" Component={Biography} />
          </Routes>


        </div>
      </Router>
      
    </div>
  );
}

export default App;
