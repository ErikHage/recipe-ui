import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import recipes from './recipes-reducer';

const rootReducer = combineReducers({
  recipes,
  toastr: toastrReducer,
});

export default rootReducer;