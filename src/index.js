import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    //We are importing our Class App from the " APP.js "; ' ./ ' means in this current folder;
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
