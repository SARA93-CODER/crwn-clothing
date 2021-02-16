import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  //we passing the (store) to the provider, so we can access the all reducers and props needed inside it
  <provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  <provider>,
  document.getElementById('root')
);