import React from 'react';
import logo from './logo.svg'; // this a logo that can be delete no need for it 
import './App.css'; // entire app css

// this new with create-react-app, it creates functional components, not class components.
// the return of this function is the <App /> rendered in the index.html, in the <div /> with id of "root"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!!
        </a>
      </header>
    </div>
  );
}

export default App;
