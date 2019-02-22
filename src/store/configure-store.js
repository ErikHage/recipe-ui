import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, ReduxPromise)
  );
}