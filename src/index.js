import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import './index.css';
import configureStore from './store/configure-store';

const store = configureStore(); // pass initial state here

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);
