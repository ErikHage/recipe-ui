import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';

import App from './components/App';

import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
// registerServiceWorker();
