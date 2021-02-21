import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './components/LoginContainer';
import DefaultContainer from './components/DefaultContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';

//import MenuIcon from '@material-ui/icons/Menu';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sass/index.scss';
console.log("index.js")
ReactDOM.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
    <Route exact path="/(login)" component={LoginContainer}/>
    <Route exact path="/(register)" component={LoginContainer}/>
    <Route component={DefaultContainer} />
  </Switch>
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);

reportWebVitals();
