import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './Custom.css';
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import Biography from './biography';
import Home from './Home';

function App() {
  return Header();
}


function Header() {
  return (
    <div>
      <Router basename='/'>
        <div>
          <h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/biography">Biography</Link>
              </li>
            </ul>
          </h1>

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
