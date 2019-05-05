import recipesService from '../services/recipes';
import * as actions from './action-types';

export function selectRecipe(filename) {
  return {
    type: actions.SELECT_RECIPE,
    filename,
  };
}

export function clearSelection() {
  return {
    type: actions.CLEAR_SELECTION,
  };
}

export function loadRecipesSuccess(recipes) {
  return {
    type: actions.LOAD_RECIPES_SUCCESS,
    recipes,
  };
}

export function loadRecipes() {
  return async function (dispatch) {
    try {
      const recipes = await recipesService.getRecipes();
      return dispatch(loadRecipesSuccess(recipes));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}