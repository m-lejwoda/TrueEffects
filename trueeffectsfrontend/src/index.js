import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import './sass/index.scss';

ReactDOM.render(
  <BrowserRouter >
      <Route exact path="/" component={ App }/>
      <Route path="/login/" component={ Login }/>
      <Route path="/register/" component={ Register }/>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
