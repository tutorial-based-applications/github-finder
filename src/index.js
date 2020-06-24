import React from 'react'; // requiring React Apps 
import ReactDOM from 'react-dom'; // requiring react dom app
import './index.css'; // requiring the main css file that gathers all other CSS filles
import App from './App'; // importing the the whole app that acts as the tag that will be rendered 
import * as serviceWorker from './serviceWorker'; // not getting to it!!

// this is what is sent to the index.html file in the public directory, with id of "root", this id is changeable
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
