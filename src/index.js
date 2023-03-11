import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import App from './components/App';

import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import configureStore from './store/configure-store';

const store = configureStore(); // pass initial state here

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App/>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
    </div>
  </Provider>, document.getElementById('root')
);
