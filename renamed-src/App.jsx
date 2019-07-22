import React from 'react';
import logo from './logo.svg';
import './App.css';

// JSX syntax
function App() {
  // Need parenthases if more than 1 line return statement
  return (
    // To create a class in HTML using react, we have to call it className
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
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
}

export default App;
