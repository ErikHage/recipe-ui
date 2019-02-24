import { SELECT_RECIPE, CLEAR_SELECTION } from '../actions/recipe-actions';

import recipeService from '../services/recipes';

export default function recipesReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_RECIPE:
      const recipe = recipeService.getRecipe(action.filename)

      return Object.assign({}, state, {
        selected: recipe,
      });
    case CLEAR_SELECTION: 
      return Object.assign({}, state, {
        selected: undefined,
      })  
    default: 
      return state;
  }
}