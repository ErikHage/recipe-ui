import * as actions from '../actions/action-types';

import recipeService from '../services/recipes';

const initialState = {
  files: [],
  selected: undefined,
};

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_RECIPE:
      const recipe = recipeService.getRecipe(action.filename);

      return Object.assign({}, state, {
        selected: recipe,
      });
    case actions.CLEAR_SELECTION:
      return Object.assign({}, state, {
        selected: undefined,
      });
    case actions.LOAD_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        files: action.recipes,
      });
    default: 
      return state;
  }
}