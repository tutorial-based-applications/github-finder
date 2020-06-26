import React from 'react'; // requiring React Apps 
import ReactDOM from 'react-dom'; // requiring react dom app
import App from './App'; // importing the the whole app that acts as the tag that will be rendered 

// this is what is sent to the index.html file in the public directory, with id of "root", this id is changeable
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
