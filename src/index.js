import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Import jQuery trước
import 'jquery/dist/jquery.min.js';
// Import popper vào
import 'popper.js/dist/popper.min.js';
// Import Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
// Import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('mycv')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
