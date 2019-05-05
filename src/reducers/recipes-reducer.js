import * as actions from '../actions/action-types';

const initialState = {
  files: [],
  selected: undefined,
};

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        selected: action.recipe,
      });
    case actions.SELECT_RECIPE_ERROR:
      return Object.assign({}, state, {
        selected: undefined,
        message: action.error.message,
      });
    case actions.CLEAR_SELECTION:
      return Object.assign({}, state, {
        selected: undefined,
      });
    case actions.LOAD_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        files: action.recipes,
      });
    case actions.LOAD_RECIPES_ERROR:
      return Object.assign({}, state, {
        files: [],
        message: action.error.message,
      });
    default: 
      return state;
  }
}