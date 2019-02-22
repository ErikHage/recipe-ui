import { combineReducers } from 'redux';

import recipes from './recipes-reducer';

const rootReducer = combineReducers({
  recipes,
});

export default rootReducer;