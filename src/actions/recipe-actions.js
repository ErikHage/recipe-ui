import recipesService from '../services/recipes';
import * as actions from './action-types';

export function selectRecipeSuccess(recipe) {
  return {
    type: actions.SELECT_RECIPE_SUCCESS,
    recipe,
  };
}

export function selectRecipeError(error) {
  return {
    type: actions.SELECT_RECIPE_ERROR,
    error,
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

export function loadRecipesError(error) {
  return {
    type: actions.LOAD_RECIPES_ERROR,
    error,
  };
}

export function loadRecipes() {
  return async function (dispatch) {
    try {
      const recipes = await recipesService.getRecipes();
      return dispatch(loadRecipesSuccess(recipes));
    } catch (err) {
      return dispatch(loadRecipesError(err));
    }
  };
}

export function loadSelectedRecipe(filename) {
  return async function (dispatch) {
    try {
      const recipe = await recipesService.getRecipe(filename);
      return dispatch(selectRecipeSuccess(recipe));
    } catch (err) {
      return dispatch(selectRecipeError(err));
    }
  }
}